# Generated by Django 5.0.5 on 2024-05-07 18:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("service_posts", "0006_alter_comments_unique_together_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="RepliesToComments",
        ),
    ]
