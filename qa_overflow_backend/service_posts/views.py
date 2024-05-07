from rest_framework.response import Response
from rest_framework import generics

from .models import Tags
from .serializers import TagSerializer

# Create your views here.

class TagAPIView(generics.ListCreateAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer