from rest_framework import serializers

from .models import Questions
from service_answers.models import Answers
from service_users.serializers import ListUserSerializer

from services.utils import convert_timestamp_into_epoch, epoch_to_readable, get_post_age

from service_posts.models import Tags

class PostQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'


class ListQuestionSerializer(serializers.ModelSerializer):
    """
    StringRelatedField() is the result of __str__() method defined in the model class
    """
    owner = ListUserSerializer()
    tags = serializers.StringRelatedField(many=True, read_only=True)
    views = serializers.SerializerMethodField()
    score = serializers.SerializerMethodField()
    answer_count = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    from_created = serializers.SerializerMethodField()
    last_activity = serializers.SerializerMethodField()
    from_last_activity = serializers.SerializerMethodField()

    class Meta:
        model = Questions
        fields = '__all__'

    def get_created_at(self, obj):
        epoch = convert_timestamp_into_epoch(str(obj.created_at))
        return epoch_to_readable(epoch)
    
    def get_last_activity(self, obj):
        epoch = convert_timestamp_into_epoch(str(obj.last_activity))
        return epoch_to_readable(epoch)
    
    def get_views(self, obj):
        # Further processing is required for manipulating - 
        # viewers str in the frontend
        return obj.viewers.count()
    
    def get_score(self, obj):
        return obj.upvotes - obj.downvotes
    
    def get_answer_count(self, obj):
        answer_count = Answers.objects.filter(question_id=obj).count()
        return answer_count
    
    def get_from_created(self, obj):
        age = get_post_age(str(obj.created_at))
        return age
        
    def get_from_last_activity(self, obj):
        age = get_post_age(str(obj.last_activity))
        return age
