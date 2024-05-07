from django.urls import path
from .views import TagAPIView

urlpatterns = [
    path('tags', TagAPIView.as_view()),
]