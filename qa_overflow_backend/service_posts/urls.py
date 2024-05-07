from django.urls import path
from .views import TagAPIView, PostAPIView, RetrievePostAPIView
from .views import CommentAPIView, RetrieveCommentAPIView, CommentVotesAPIView, RetrieveCommentVoteAPIView

urlpatterns = [
    path('', PostAPIView.as_view()),
    path('<int:pk>', RetrievePostAPIView.as_view()),
    path('tags', TagAPIView.as_view()),
    path('comments', CommentAPIView.as_view()),
    path('comments/<int:pk>', RetrieveCommentAPIView.as_view()),
    path('comments/vote', CommentVotesAPIView.as_view()),
    path('comments/vote/<int:pk>', RetrieveCommentVoteAPIView.as_view()),
]