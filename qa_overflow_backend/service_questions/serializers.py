from rest_framework import serializers
from .models import Questions

from services.utils import convert_timestamp_into_epoch, epoch_to_readable



class PostQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'


class ListQuestionSerializer(serializers.ModelSerializer):
    """
    StringRelatedField() is the result of __str__() method defined in the model class
    """
    tags = serializers.StringRelatedField(many=True, read_only=True)
    created_at = serializers.SerializerMethodField()
    last_activity = serializers.SerializerMethodField()

    class Meta:
        model = Questions
        fields = '__all__'

    def get_created_at(self, obj):
        epoch = convert_timestamp_into_epoch(str(obj.created_at))
        return epoch_to_readable(epoch)
    
    def get_last_activity(self, obj):
        epoch = convert_timestamp_into_epoch(str(obj.last_activity))
        return epoch_to_readable(epoch)