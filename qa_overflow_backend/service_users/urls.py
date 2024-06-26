from django.urls import path
from .views import UsersAPIView, SingleUserAPIView, LoginAPIView, LogoutAPIView

urlpatterns = [
    path("register", UsersAPIView.as_view()),
    path("<int:pk>", SingleUserAPIView.as_view()),
    path("login", LoginAPIView),
    path("logout", LogoutAPIView),
]