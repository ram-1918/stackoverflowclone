import { Link } from "react-router-dom";
import { BaseAskedBy, BaseDisplayDate, BaseDisplayName, BaseGreenTick, BaseTagListDisplay } from "../../../base/Base";

const OneQuestion = ({ que }) => {
  return (
    <div className="py-3 w-full flex flex-row border-b border-gray-200">
      <MetaData {...que} />
      <QuestionDisplay {...que} />
    </div>
  );
};

export default OneQuestion;

const MetaData = ({ viewers, score, answer_count, is_answered }) => {
  return (
    <div className="py-1 w-[15%] px-5 flex flex-col items-end justify-start space-y-1">
      <MetaDataSpan title={`${viewers} Views`} />
      <MetaDataSpan title={`${score} Votes`} />
      <MetaDataSpan title={`${answer_count} Answers`} is_answered={is_answered}/>
    </div>
  );
};

const MetaDataSpan = ({ title, is_answered }) => {
    const activeStyles = {
        backgroundColor: is_answered && "green", 
        color: is_answered && "white"
    }
    return (
        <span style={activeStyles} className={`${is_answered && "p-0.5 rounded"} text-[0.8rem] font-normal`}>
            {is_answered && <BaseGreenTick size="1rem" color="white" />} {title}
        </span>
    )
}

const QuestionDisplay = ({
  id,
  title,
  body,
  tags,
  user_id: { displayname },
  created_at,
}) => {
  return (
    <div className="w-[83%] flex flex-col px-2 items-start justify-start space-y-2">
      <QuestionSpan title={title} id={id} />
      <DescriptionSpan title={body} />
      <TagSpan tags={tags} displayname={displayname} created_at={created_at} />
    </div>
  );
};

const TagSpan = ({ tags, displayname, created_at }) => {
  return (
    <div className="w-full flex flex-row justify-between items-end flex-wrap">
        <BaseTagListDisplay tags={tags} />
        <BaseAskedBy displayname={displayname} date={created_at} />
    </div>
  );
};

const QuestionSpan = ({ title, id }) => {
  return (
    <Link
      to={`/questions/${id}`}
      className="text-teal-600 text-lg font-normal cursor-pointer hover:opacity-80"
    >
      {title}
    </Link>
  );
};

const DescriptionSpan = ({ title }) => (
  <span className="text-md font-light text-ellipsis">{title.slice(0, 150)}</span>
);
