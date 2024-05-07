from django.db import models

from service_users.models import Users
from service_questions.models import Questions
from service_posts.models import Tags

class Answers(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Questions, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tags)

    body = models.TextField(blank=True)

    is_accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_activity = models.DateTimeField(auto_now=True)
    favorite_count = models.IntegerField(default=0)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Answers"

    def __str__(self):
        return f'Answer {self.id}'