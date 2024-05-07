from django.urls import path
from .views import QuestionsAPIView, RetrieveQuestionAPIView

urlpatterns = [
    path("", QuestionsAPIView.as_view()),
    path("<int:pk>", RetrieveQuestionAPIView.as_view()),
]