from rest_framework import generics
from rest_framework.response import Response

from .models import Answers
from .serializers import AnswerSerializer

class AnswersAPIView(generics.ListCreateAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswerSerializer

    def get(self, request):
        qid = request.query_params.get('qid')
        answers = Answers.objects.filter(question_id=qid)
        serializer = AnswerSerializer(answers, many=True)
        result = {
            "count": len(serializer.data),
            "data": serializer.data 
        }
        return Response(result)