# Generated by Django 5.0.5 on 2024-05-09 19:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service_questions", "0007_rename_user_id_questions_owner_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="questions",
            name="visibility",
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name="questions",
            name="last_activity",
            field=models.CharField(
                blank=True,
                default=datetime.datetime(
                    2024, 5, 9, 19, 5, 4, 268976, tzinfo=datetime.timezone.utc
                ),
                max_length=100,
            ),
        ),
    ]
