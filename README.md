# stackoverflowclone

### If git commnads execution raised issues regarding 'xcrun'
> xcode-select --install

> Change ownership from root to normal:
chown -R ramchandrab path_to_Directory

> View Permissions:
ls -lr

##### Migrations and __init__.py inside it, is needed to migrate Databases


### DataMode: Entities
Users, Questions, Answers, Posts, Comments, Tags

**Edited request table can be used: edit requests stored into a table and updates once the edited_answer or edited_question is accepted(Enhancement)**

### DataModel: Entity Fields
Users: {
    Info: {
        email, password, firstname, lastname, display_name, location,
        is_employee, type(registed/anonymous)
    },
    Meta: {
        questions_count, answers_count, view_count(reputation), 
        upvotes, downvotes, age, profileimage, websiteurl
    }
}

Question: {
    Info: {
        title, body, user_id(F), is_answered, tags(F+M), comments(F+M)
    },
    Meta: {
        score, creation_date, last_activity, is_favorite, is_edited,
        edited_by, view_count, answer_count(for this question),
    }
}

Answer: {
    Info: {
        title, body, user_id(F), is_accepted, tags(F+M), comments(F+M)
    },
    Meta: {
        score, creation_date, last_activity, 
         is_favorite, is_edited, edited_by, view_count,
    }
}

Post: {
    post_type(question/answer), post_id, user_id(F)
}

Comment: {
    Info: {
        body, user_id(F), post_id(F), score, reply_to_user,
        is_edited, edited_by
    }
}

Votes: {
    user_id(F), post_id(F), vote_type(up/down vote)
}

tags: {
    name, count(to find most used tag and other purposes)
}