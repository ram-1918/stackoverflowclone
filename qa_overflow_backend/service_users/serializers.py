from rest_framework import serializers

from .models import Users


class PostUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

    # Override create method to call our custom method defined in our models
    def create(self, validated_data):
        return Users.objects.create_user(**validated_data)


class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('displayname', 'profileimage', 'location', 'websiteurl')

    
class RetrieveUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
