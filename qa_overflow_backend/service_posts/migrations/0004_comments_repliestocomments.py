# Generated by Django 5.0.5 on 2024-05-07 15:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service_posts", "0003_alter_posts_post_type_alter_posts_unique_together"),
        ("service_users", "0005_alter_users_id"),
    ]

    operations = [
        migrations.CreateModel(
            name="Comments",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("body", models.TextField()),
                ("upvotes", models.IntegerField(default=0)),
                ("downvotes", models.IntegerField(default=0)),
                (
                    "post_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="service_posts.posts",
                    ),
                ),
                (
                    "user_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="service_users.users",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Comments",
            },
        ),
        migrations.CreateModel(
            name="RepliesToComments",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("current_comment_id", models.IntegerField()),
                (
                    "parent_comment_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="service_posts.comments",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "RepliesToComments",
            },
        ),
    ]
