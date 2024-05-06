from django.db import models

from service_users.models import Users
from service_questions.models import Questions

class Answers(models.Model):
    answer = models.TextField(blank=True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Questions, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Answers"

    def __str__(self):
        return self.answer