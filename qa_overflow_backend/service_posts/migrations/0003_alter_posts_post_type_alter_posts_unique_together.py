# Generated by Django 5.0.5 on 2024-05-07 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service_posts", "0002_posts"),
    ]

    operations = [
        migrations.AlterField(
            model_name="posts",
            name="post_type",
            field=models.CharField(
                choices=[("question", "Question"), ("answer", "Answer")], max_length=25
            ),
        ),
        migrations.AlterUniqueTogether(
            name="posts",
            unique_together={("post_type", "post_id")},
        ),
    ]
