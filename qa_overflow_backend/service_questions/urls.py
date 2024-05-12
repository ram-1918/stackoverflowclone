from django.urls import path
from .views import QuestionsAPIView, RetrieveQuestionAPIView
from service_votes.views import UserVotesAPIView

urlpatterns = [
    path("", QuestionsAPIView.as_view()),
    path("<int:pk>", RetrieveQuestionAPIView.as_view()),
    path("votes/", UserVotesAPIView.as_view()),
]