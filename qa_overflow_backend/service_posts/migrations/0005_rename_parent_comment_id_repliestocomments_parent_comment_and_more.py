# Generated by Django 5.0.5 on 2024-05-07 17:57

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service_posts", "0004_comments_repliestocomments"),
        ("service_users", "0005_alter_users_id"),
    ]

    operations = [
        migrations.RenameField(
            model_name="repliestocomments",
            old_name="parent_comment_id",
            new_name="parent_comment",
        ),
        migrations.RemoveField(
            model_name="comments",
            name="downvotes",
        ),
        migrations.RemoveField(
            model_name="comments",
            name="upvotes",
        ),
        migrations.RemoveField(
            model_name="repliestocomments",
            name="current_comment_id",
        ),
        migrations.AddField(
            model_name="comments",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="comments",
            name="last_activity",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.CreateModel(
            name="CommentVotes",
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
                ("is_upvote", models.BooleanField(default=False)),
                (
                    "comment_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="service_posts.comments",
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
                "verbose_name_plural": "CommentVotes",
            },
        ),
    ]
