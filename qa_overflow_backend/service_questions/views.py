# from django.utils.decorators import method_decorator
# @method_decorator()

from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response


from .models import Questions
from .serializers import ListQuestionSerializer, PostQuestionSerializer

from services.pagination import CustomPagination

class QuestionsAPIView(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    pagination_class = CustomPagination


    def get_queryset(self):
        # print("get_queryset")
        return self.queryset.order_by('-title')

    # def paginate_queryset(self, queryset):
    #     print("paginate_queryset", len(queryset))
    #     return super().paginate_queryset(queryset)
    
    def get_serializer_class(self):
        # print("get_serializer_class")
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