from rest_framework import serializers
from .models import Answers
from services.utils import convert_timestamp_into_epoch, epoch_to_readable

class PostAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = '__all__'

class ListAnswerSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True, read_only=True)
    created_at = serializers.SerializerMethodField()
    last_activity = serializers.SerializerMethodField()

    class Meta:
        model = Answers
        fields = '__all__'

    def get_created_at(self, obj):
        epoch = convert_timestamp_into_epoch(str(obj.created_at))
        return epoch_to_readable(epoch)
    
    def get_last_activity(self, obj):
        epoch = convert_timestamp_into_epoch(str(obj.last_activity))
        return epoch_to_readable(epoch)