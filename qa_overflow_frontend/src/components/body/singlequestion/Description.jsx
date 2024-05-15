import {
  faCaretDown,
  faCaretUp,
  faEdit,
  faHistory,
  faPlus,
  faShare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  BaseDisplayName,
  BaseTagListDisplay,
  BaseUtilLinks,
  Loading,
} from "../../base/Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  currentQuestionData,
  currentUser,
  nativeColors,
  questionsData,
  sample,
  votesData,
} from "../../../recoil_state/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { APIURL, useUpdateDataHook } from "../../../hooks/UpdateDataHook";
import { useEffect, useState } from "react";
import { usePostDataHook } from "../../../hooks/PostDataHook";
import ToggleMode from "../questions/support/ToggleMode";
import { useParams } from "react-router-dom";

const CaretUpIcon = () => <FontAwesomeIcon icon={faCaretUp} />;
const CaretDownIcon = () => <FontAwesomeIcon icon={faCaretDown} />;
const BookmarkIcon = () => <i className="fa fa-bookmark-o text-xl"></i>;
const ActivityIcon = () => <FontAwesomeIcon icon={faHistory} />;

const activeColor = "rgb(243 244 246)";

const caretStyle =
  "w-10 h-10 rounded-full shadow border cursor-pointer border-gray-200 flex justify-center items-center text-xl";

  const CaretUpSpan = ({ voted, ...rest }) => {
    return (
      <span
        {...rest}
        style={{ backgroundColor: voted === "upvote" && activeColor }}
        className={caretStyle}
      >
        {<CaretUpIcon />}
      </span>
    );
  };
  
  const CaretDownSpan = ({ voted, ...rest }) => {
    return (
      <span
        {...rest}
        style={{ backgroundColor: voted === "downvote" && activeColor }}
        className={caretStyle}
      >
        {<CaretDownIcon />}
      </span>
    );
  };
  

export default function Description() {
  const { qid } = useParams();

  const question = useRecoilValue(questionsData).items.filter(
    (item) => item.id === parseInt(qid)
  )?.[0];
  if (!question) {
    return <Loading />;
  }
  return (
    <div className="w-full h-fit flex flex-row justify-center items-start py-1 ">
      <LeftDiv {...question} />
      <RightDiv />
    </div>
  );
}

const url = `${APIURL}questions/votes/`;

const LeftDiv = ({ id, owner, visibility, score, upvotes, downvotes }) => {
  const [, setQuestions] = useRecoilState(questionsData);
  const current_user = useRecoilValue(currentUser);
  const votesdata = useRecoilValue(votesData);
  const [voted, setVoted] = useState("");
  const [curr_score, setCurrScore] = useState(score);
  const [curr_upvotes, setCurrUpVotes] = useState(upvotes);
  const [curr_downvotes, setCurrDownVotes] = useState(downvotes);

  const { postData } = usePostDataHook();
  const { updateData } = useUpdateDataHook();

  useEffect(() => {
    if (votesdata) {
      setVoted(() => {
        const idx = votesdata.items.findIndex(
          (item) => item.post_id === id && item.post_type === "question"
        );
        if (idx !== -1) {
          return votesdata.items[idx].vote_type;
        } else {
          return "";
        }
      });
    }
  }, [votesdata, setVoted]);

  useEffect(() => {
    setCurrScore(curr_upvotes - curr_downvotes);
  }, [curr_upvotes, curr_downvotes, setCurrScore]);

  const handleVoting = (type) => {
    if (owner.id === current_user.id) {
      return;
    }

    const data = {
      user_id: current_user.id,
      post_type: "question",
      post_id: id,
      vote_type: type,
    };

    postData(url, data);
    if (type === "upvote") {
      switch (voted) {
        case "upvote":
          break;
        case "downvote":
          setCurrDownVotes((prev) => prev - 1);
          setCurrUpVotes((prev) => prev + 1);
          break;
        default:
          setCurrUpVotes((prev) => prev + 1);
          break;
      }
    } else {
      switch (voted) {
        case "downvote":
          break;
        case "upvote":
          setCurrUpVotes((prev) => prev - 1);
          setCurrDownVotes((prev) => prev + 1);
          break;
        default:
          setCurrDownVotes((prev) => prev + 1);
          break;
      }
    }
    setVoted(type);
    // setQuestions(
    //   prev => {
    //     if(prev) {
    //       const val = {
    //         ...prev,
    //         "items": [
    //           ...prev.items.slice(0, id),
    //           {
    //             ...prev.items[id],
    //             'score': curr_upvotes - curr_downvotes,
    //             'upvotes': curr_upvotes,
    //             'downvotes': curr_downvotes
    //           },
    //           ...prev.items.slice(id+1)
    //         ]
    //       }
    //       console.log('updating up/downvotes questions', val, prev);
    //       return val;
    //     }
    //     return prev;
    //   }
    // )
  };

  return (
    <div className="w-[12%] h-full px-2 flex flex-col justify-start items-center space-y-2 pt-4">
      {/* Public/Private should only be applicable for questions */}
      {owner.id === current_user.id && (
        <ToggleMode qid={id} visibility={visibility} />
      )}
      <CaretUpSpan onClick={() => handleVoting("upvote")} voted={voted} />
      <span className="text-lg font-semibold">
        {curr_score} {voted}
      </span>
      <CaretDownSpan onClick={() => handleVoting("downvote")} voted={voted} />
      <BookmarkIcon />
      <ActivityIcon />
    </div>
  );
};

const RightDiv = () => {
  const { qid } = useParams();

  const question = useRecoilValue(questionsData).items.filter(
    (item) => item.id === parseInt(qid)
  )?.[0];

  if (!question) {
    return <Loading text="Loading more details" />;
  }
  const { body, tags, ...rest } = question;

  return (
    <div className="w-[90%] h-full flex flex-col justify-start items-start space-y-0 border-b ">
      <div className="w-full flex flex-col space-y-4 p-2">
        <span className="w-full p-2 leading-6 tracking-wide text-wrap whitespace-pre-wrap pb-2">
          {body}
        </span>
        {tags && <BaseTagListDisplay tags={tags} />}
      </div>
      <div className="w-full flex flex-row justify-between items-center p-2">
        <div className="flex flex-row justify-around items-center space-x-4">
          <BaseUtilLinks
            text="Share"
            to="/share"
            icon={<FontAwesomeIcon icon={faShare} />}
          />
          <BaseUtilLinks
            text="Edit"
            to="/features/questions/:qid/edit"
            icon={<FontAwesomeIcon icon={faEdit} />}
          />
          <BaseUtilLinks
            text="Follow"
            to="/follow"
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </div>
        {rest.owner && <InfoBox {...rest} />}
      </div>
    </div>
  );
};

const InfoBox = ({ owner: { displayname }, created_at }) => {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <div
      style={{ backgroundColor: native_colors["teal"]["1"] }}
      className="flex flex-col justify-start items-start p-2 rounded-lg shadow"
    >
      <span className="text-[0.8rem]">asked {created_at}</span>
      <div className="flex justify-start items-center space-x-2">
        <span className="bg-red-400 flex justify-center items-center rounded-full w-8 h-8">
          <FontAwesomeIcon icon={faUser} className="text-lg" />
        </span>
        <div className="flex flex-col justify-start items-start">
          <BaseDisplayName displayname={displayname} />
          <span>500k - 53 - 501 - 548</span>
        </div>
      </div>
    </div>
  );
};