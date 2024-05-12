from django.db import models

from service_users.models import Users
from service_posts.models import Posts

class UserVotes(models.Model):
    vote_types = [('upvote', 'Upvote'), ('downvote', 'Downvote')]
    post_types = [('question', 'Question'), ('answer', 'Answer')]
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    post_id = models.IntegerField(blank=True) # models.ForeignKey(Posts, on_delete=models.CASCADE)
    post_type = models.CharField(max_length=25, choices=post_types)
    vote_type = models.CharField(max_length=25, choices=vote_types)

    def __str__(self):
        return f'{self.user_id.displayname} {self.vote_type}d for {self.post_type} {self.post_id}'
    
    class Meta:
        verbose_name_plural = 'UserVotes'
        unique_together = ('user_id', 'post_id', 'post_type', 'vote_type')