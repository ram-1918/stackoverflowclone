# from django.utils.decorators import method_decorator
# @method_decorator()

from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.response import Response


from .models import Questions
from .serializers import ListQuestionSerializer, PostQuestionSerializer

from service_posts.models import Tags

from services.pagination import CustomPagination

class QuestionsAPIView(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    pagination_class = CustomPagination


    def get_queryset(self):
        print('POST')
        return self.queryset.order_by('-title')
    
    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        tags = data.get("tags")
        if tags:
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
        print(data, newtags)
        ser = PostQuestionSerializer(data=data)
        ser.is_valid(raise_exception=True)
        ser.save()
        # Get saved object
        id = ser.data["id"]
        obj = Questions.objects.filter(id=id).first()
        ser = ListQuestionSerializer(obj)
        return Response(ser.data, status=status.HTTP_201_CREATED)

    # def paginate_queryset(self, queryset):
    #     print("paginate_queryset", len(queryset))
    #     return super().paginate_queryset(queryset)
    
    def get_serializer_class(self):
        print("get_serializer_class")
        if self.request.method == 'POST':
            return PostQuestionSerializer
        return ListQuestionSerializer

class RetrieveQuestionAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questions.objects.all()
    pagination_class = CustomPagination

    def get_serializer_class(self):
        if self.request.method in ['PATCH', 'PUT']:
            return PostQuestionSerializer
        return ListQuestionSerializer