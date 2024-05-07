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

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PostQuestionSerializer
        return ListQuestionSerializer

    def get_queryset(self):
        return self.queryset.order_by('-title')

class RetrieveQuestionAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questions.objects.all()
    pagination_class = CustomPagination

    def get_serializer_class(self):
        if self.request.method in ['PATCH', 'PUT']:
            return PostQuestionSerializer
        return ListQuestionSerializer