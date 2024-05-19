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

### To-Dos: Before Sunday
1. public/private setup
2. Viewed count: Many-many with users table
3. Voting system
4. Favorites system

### React
Enhancement: Reduce the number of API calls made.
State management: Recoil library
Recoil:
1. Atom(): to create state value
2. selector(): represents a piece derived state
3. useRecoilState(): to create a writable state
4. useRecoilValue(): to create read-only selector value
5. Async can be used with selector()
6. React.Suspense with a fallback is used to handle pending data
7. Implement error handling by throwing response.error in selector()
8. SelectorFamily(): to implement queries with parameters


### Text Editor with Slate js
Steps:
1. Install slate: npm install slate slate-react
2. Import slate editor factory and its components: 
    > import { createEditor } from 'slate';
    > import { Slate, Editable, withReact } from 'slate-react';
3. Create editor:
    > const [editor] = useState(() => withReact(createEditor()))
    > Initialize with an json object
4. <Slate editor={editor} initialValue={initialValue} /> : as a context provider, it provides values to its child components
5. onKeyDown(e => if(e.key === '&') editor.insertText('and'))
6. preventDefault(): prevents the character from being inserted
7. Editor: editor.insertText()
8. Custom elements: DefaultElement, CodeElement components
