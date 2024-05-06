# from django.utils.decorators import method_decorator
# @method_decorator()

from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response

from .models import Questions
from .serializers import QuestionsSerializer

class QuestionsAPIView(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer

    def get(self, request):
        serializer = QuestionsSerializer(self.get_queryset(), many=True)
        result = {
            "count": len(serializer.data),
            "data": serializer.data
        }
        return Response(result)