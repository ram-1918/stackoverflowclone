# Generated by Django 5.0.5 on 2024-05-10 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service_votes", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="uservotes",
            name="post_id",
            field=models.CharField(blank=True, max_length=25),
        ),
    ]
