# Generated by Django 5.0.5 on 2024-05-07 17:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        (
            "service_posts",
            "0005_rename_parent_comment_id_repliestocomments_parent_comment_and_more",
        ),
        ("service_users", "0005_alter_users_id"),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name="comments",
            unique_together={("post_id", "user_id")},
        ),
        migrations.AlterUniqueTogether(
            name="commentvotes",
            unique_together={("comment_id", "user_id")},
        ),
    ]
