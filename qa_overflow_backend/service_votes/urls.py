from django.urls import path
from .views import UserVotesAPIView

urlpatterns = [
    path("", UserVotesAPIView.as_view()),
]