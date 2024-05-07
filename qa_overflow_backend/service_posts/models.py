from django.db import models
from service_users.models import Users

class Tags(models.Model):
    name = models.CharField(max_length=25, unique=True, null=True)
    count = models.IntegerField(default=0)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Tags"


class Posts(models.Model):
    types = [('question', 'Question'), ('answer', 'Answer')]
    post_type = models.CharField(max_length=25, choices=types)
    post_id = models.IntegerField()
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.post_type} {self.post_id}"
    
    class Meta:
        verbose_name_plural = "Posts"
        unique_together = (("post_type", "post_id"),)


class Comments(models.Model):
    body = models.TextField()
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    last_activity = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Comment by {self.user_id.displayname[:10]}... on post {self.post_id.id}"
    
    class Meta:
        verbose_name_plural = "Comments"
        unique_together = (("post_id", "user_id"),)

class CommentVotes(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    comment_id = models.ForeignKey(Comments, on_delete=models.CASCADE)
    is_upvote = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user_id.displayname} {'upvoted' if self.is_upvote else 'downvoted'} {self.comment_id.id}"
    
    class Meta:
        verbose_name_plural = "CommentVotes"
        unique_together = (("comment_id", "user_id", "is_upvote"),)