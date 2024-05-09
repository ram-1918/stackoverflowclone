# from django.utils.decorators import method_decorator
# @method_decorator()
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Questions
from .serializers import ListQuestionSerializer, PostQuestionSerializer
from service_posts.models import Tags
from services.pagination import CustomPagination

def processTags(data):
    tags = data.get("tags")
    if tags and tags != '':
        newtags = []
        for tag in tags:
            tagobj = Tags.objects.filter(name=tag).first()
            if not tagobj:
                tagobj = Tags(name=tag)
                tagobj.save()
            newtags.append(tagobj.id)
    else:
        newtags = []
    data["tags"] = newtags
    return data

class QuestionsAPIView(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    pagination_class = CustomPagination

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PostQuestionSerializer
        return ListQuestionSerializer

    def get_queryset(self):
        return self.queryset.order_by('-created_at')
    
    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        print(data, "step1")
        updatedData = processTags(data)
        print(updatedData, "step2")
        ser = PostQuestionSerializer(data=updatedData)
        print("data", "step3")
        ser.is_valid(raise_exception=True)
        print("data", "step4")
        ser.save()
        '''
        Get New question's ID, to process response compatible with get request
        So serialize data with serializer that is used by GET request
        '''
        id = ser.data["id"]
        obj = Questions.objects.filter(id=id).first()
        print(obj, "step5")
        ser = ListQuestionSerializer(obj)
        return Response(ser.data, status=status.HTTP_201_CREATED)
    

class RetrieveQuestionAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questions.objects.all()
    pagination_class = CustomPagination

    def get_serializer_class(self):
        if self.request.method in ['PATCH', 'PUT']:
            return PostQuestionSerializer
        return ListQuestionSerializer