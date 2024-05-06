from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response

from .models import Users
from .serializers import PostUserSerializer, ListUserSerializer

"""
Authenticated APIs: Posting questing, Answering to a question, Commenting to an answer, Up/down voting answers
Rest others like: Viewing questions, answers

No need for anonymous ???
"""

class UsersAPIView(generics.ListCreateAPIView):
    queryset = Users.objects.all()

    # Override get_serializer_class method to dynamically 
    # return serializer class based on request method
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PostUserSerializer
        return ListUserSerializer

@api_view(['POST'])
def LoginAPIView(request):
    # Considering both email and passwords are valid ones
    email, password = request.data.get('email'), request.data.get('password')
    user = Users.objects.filter(email=email).first()
    if user:
        if user.check_password(password):
            return Response("Login success and store JWT token in http only cookie")
        else:
            return Response("Incorrect Password")
    return Response("Invalid User")

@api_view(['DELETE'])
def LogoutAPIView(request):
    response = Response("Logged out succuss")
    # Delete cookie stored in the response object
    return response
