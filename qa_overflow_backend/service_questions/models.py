from django.db import models

from service_users.models import Users
from service_posts.models import Tags

from django.utils import timezone
from datetime import datetime

class Questions(models.Model):
    """
    Considering edited_by feature for enhancements
    """
    owner = models.ForeignKey(Users, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tags)

    title = models.TextField(blank=True, unique=True)
    body = models.TextField(blank=True)
    
    visibility = models.BooleanField(default=True)    # True represents Public, Private is False
    is_answered = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_activity = models.CharField(max_length=100, blank=True, default=timezone.now())
    
    viewers = models.ManyToManyField(Users, related_name='viewers') # models.TextField(default='')
    favorite_count = models.IntegerField(default=0)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Questions"

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if self.id:
            try:
                prev_instance = Questions.objects.filter(id=self.id).first()
                if prev_instance.title != self.title or prev_instance.body != self.body:
                    print('change detected in title or body of questions')
                    self.last_activity = timezone.now()
                else:
                    print('no change detected in title or body of questions')
            except Questions.DoesNotExist:
                pass
        super().save(*args, **kwargs)
