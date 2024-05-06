from django.urls import path
from .views import AnswersAPIView

urlpatterns = [
    path("", AnswersAPIView.as_view()),
]