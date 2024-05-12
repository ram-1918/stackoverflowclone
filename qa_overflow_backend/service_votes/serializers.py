from rest_framework import serializers
from .models import UserVotes

class UserVotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserVotes
        fields = '__all__'