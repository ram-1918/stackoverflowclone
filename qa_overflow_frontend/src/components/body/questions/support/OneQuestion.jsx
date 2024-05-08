import { Link } from 'react-router-dom';

const OneQuestion = ({que}) => {
    return (
        <div className="py-2 w-full flex flex-row border-b border-gray-200">
            <MetaData {...que} />
            <QuestionDisplay {...que}  />
        </div>
    );
};

export default OneQuestion;


const MetaData = ({viewers, score, answer_count}) => {
    return (
        <div className="w-[15%] px-5 flex flex-col items-end justify-start space-y-2">
            <MetaDataSpan title={`${viewers} Views`} />
            <MetaDataSpan title={`${score} Votes`} />
            <MetaDataSpan title={`${answer_count} Answers`} />
        </div>
    );
};

const MetaDataSpan = ({title}) => <span className="text-sm font-medium">{title}</span>;

const QuestionDisplay = ({id, title, body, tags, user_id:{displayname}, created_at}) => {
    return (
        <div className="w-[83%] flex flex-col px-2 items-start justify-start space-y-1">
            <QuestionSpan title={title} id={id} />
            <DescriptionSpan title={body} />
            <TagSpan tags={tags} displayname={displayname} created_at={created_at} />
        </div>
    )
};

const TagSpan = ({tags, displayname, created_at}) => {
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-2 ">
                {tags.map((tag, idx) => <TagStyle key={idx} tag={tag} /> )}
            </div>
            <span className="text-sm font-light">
                {displayname} asked on {created_at}
            </span>
        </div>
    );
};


const QuestionSpan = ({title, id}) => {
    return (
        <Link to={`/questions/${id}`} className="text-teal-600 text-lg font-normal cursor-pointer hover:opacity-80">
            {title}
        </Link>
    );
};

const DescriptionSpan = ({title}) => (
    <span className="text-md font-light">{title.slice(0,200)}</span>
);

const TagStyle = ({tag}) => <span className="p-1 text-sm rounded-md bg-green-100">{tag}</span>;

