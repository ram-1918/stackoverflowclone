from django.db import models

# Create your models here.

class Tags(models.Model):
    name = models.CharField(max_length=25, unique=True, null=True)
    count = models.IntegerField(default=0)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Tags"
        