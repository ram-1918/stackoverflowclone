from django.urls import path
from .views import QuestionsAPIView

urlpatterns = [
    path("", QuestionsAPIView.as_view()),
]