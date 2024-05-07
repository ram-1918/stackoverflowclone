from rest_framework import generics

from .models import Answers
from .serializers import PostAnswerSerializer, ListAnswerSerializer
from services.pagination import CustomPagination

class AnswersAPIView(generics.ListCreateAPIView):
    queryset = Answers.objects.all()
    pagination_class = CustomPagination

    def get_queryset(self):
        data = self.queryset
        # Gets all answers for question_id
        qid = self.request.query_params.get('qid', None)
        if qid:
            data = data.filter(question_id=qid)
        return data
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PostAnswerSerializer
        return ListAnswerSerializer

class RetrieveAnswerAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answers.objects.all()
    pagination_class = CustomPagination

    def get_serializer_class(self):
        if self.request.method in ['PATCH', 'PUT']:
            return PostAnswerSerializer
        return ListAnswerSerializer