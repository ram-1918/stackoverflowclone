import { Link } from "react-router-dom";
import { BaseAskedBy, BaseGreenTick, BaseTagListDisplay } from "../../base/Base";
import { currentUser, nativeColors } from "../../../recoil_state/state";
import { useRecoilValue } from "recoil";
import ToggleMode from "./ToggleMode";

export default function QuestionCard({ que }) {
  return (
    <div className="py-3 w-full flex flex-row border-b border-gray-200">
      <MetaData {...que} />
      <QuestionData {...que} />
    </div>
  );
};


const MetaData = ({ id, owner, visibility, views, score, answer_count, is_answered }) => {
  const current_user_id = useRecoilValue(currentUser);
  return (
    <div className="py-1 w-[15%] px-5 flex flex-col items-end justify-start space-y-1">
      <MetaDataSpan title={`${views} Views`} />
      <MetaDataSpan title={`${score} Votes`} />
      <MetaDataSpan title={`${answer_count} Answers`} is_answered={is_answered} />
      {owner.id === current_user_id && <ToggleMode qid={id} visibility={visibility} />}
    </div>
  );
};

const MetaDataSpan = ({ title, is_answered=false }) => {
    const activeStyles = {
        backgroundColor: is_answered && "green", 
        color: is_answered && "white"
    }
    return (
        <span style={activeStyles} className={`${is_answered && "px-1 py-0.5 rounded"} text-[0.8rem] font-normal`}>
            {is_answered && <BaseGreenTick size="1rem" color="white" />} {title}
        </span>
    )
}

const QuestionData = ({
  id,
  title,
  body,
  tags,
  owner: { displayname },
  created_at
}) => {
  return (
    <div className="w-[83%] flex flex-col px-2 items-start justify-start space-y-2">
      <QuestionDataSpan title={title} id={id} />
      <DescriptionSpan text={body} />
      <TagSpan tags={tags} displayname={displayname} created_at={created_at} />
    </div>
  );
};

const QuestionDataSpan = ({ title, id }) => {
  const native_colors = useRecoilValue(nativeColors);

  return (
    <Link
      style={{color: native_colors['teal']['3']}}
      to={`/features/questions/${id}`}
      className="text-teal-600 text-lg font-normal cursor-pointer hover:opacity-80"
    >
      {title}
    </Link>
  );
};

const DescriptionSpan = ({ text }) => (
  <span className="text-md font-light text-ellipsis">{text.slice(0, 150)}</span>
);


const TagSpan = ({ tags, displayname, created_at }) => {
  return (
    <div className="w-full flex flex-row justify-between items-end flex-wrap">
        <BaseTagListDisplay tags={tags} />
        <BaseAskedBy displayname={displayname} date={created_at} />
    </div>
  );
};