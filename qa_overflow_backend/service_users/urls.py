from django.urls import path
from .views import UsersAPIView, LoginAPIView, LogoutAPIView

urlpatterns = [
    path("register", UsersAPIView.as_view()),
    path("login", LoginAPIView),
    path("logout", LogoutAPIView),
]