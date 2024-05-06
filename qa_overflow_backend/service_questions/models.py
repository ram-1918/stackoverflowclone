from django.db import models

from service_users.models import Users
from service_posts.models import Tags


class Questions(models.Model):
    """
    Considering edited_by feature for enhancements
    """
    userid = models.ForeignKey(Users, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tags)

    title = models.TextField(blank=True, unique=True)
    body = models.TextField(blank=True)
    is_answered = models.BooleanField(default=False)
    is_favorite = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)
    last_activity = models.DateTimeField(auto_now_add=True)
    view_count = models.IntegerField(default=0)
    answer_count = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Questions"

    def __str__(self):
        return self.title