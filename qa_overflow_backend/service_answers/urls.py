from django.urls import path
from .views import AnswersAPIView, RetrieveAnswerAPIView

urlpatterns = [
    path("", AnswersAPIView.as_view()),
    path("<int:pk>", RetrieveAnswerAPIView.as_view()),
]