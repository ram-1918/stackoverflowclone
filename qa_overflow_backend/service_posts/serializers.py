from rest_framework import serializers
from .models import Tags, Posts, Comments, CommentVotes


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'

# Posts
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'

class ListPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'

# Comments
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

class ListCommentSerializer(serializers.ModelSerializer):
    total_votes = serializers.SerializerMethodField()
    class Meta:
        model = Comments
        fields = '__all__'
    
    def get_total_votes(self, obj):
        total_votes = CommentVotes.objects.filter(comment_id = obj, is_upvote = True).count()
        return total_votes

class CommentVotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentVotes
        fields = '__all__'

class ListCommentVotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentVotes
        fields = '__all__'