from rest_framework.response import Response
from rest_framework import generics

from .models import Tags, Posts, Comments, CommentVotes
from .serializers import TagSerializer, PostSerializer, ListPostSerializer
from .serializers import CommentSerializer, ListCommentSerializer, CommentVotesSerializer, ListCommentVotesSerializer

# Create your views here.

class TagAPIView(generics.ListCreateAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    
class PostAPIView(generics.ListCreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return self.queryset.order_by('user_id')

class RetrievePostAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class CommentAPIView(generics.ListCreateAPIView):
    queryset = Comments.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CommentSerializer
        return ListCommentSerializer

class RetrieveCommentAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer

class CommentVotesAPIView(generics.ListCreateAPIView):
    queryset = CommentVotes.objects.all()
    serializer_class = CommentVotesSerializer

class RetrieveCommentVoteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentVotes.objects.all()
    serializer_class = CommentVotesSerializer
