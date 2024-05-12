import {
  faCaretDown,
  faCaretUp,
  faEdit,
  faHistory,
  faPlus,
  faShare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nativeColors, votesData } from "../../../recoil_state/state";
import { useRecoilValue } from "recoil";
import {
  BaseDisplayName,
  BaseTagListDisplay,
  BaseUtilLinks,
  BaseVisiblityToggle,
  Loading,
} from "../../base/Base";
import { APIURL, useUpdateDataHook } from "../../../hooks/UpdateDataHook";
import ToggleMode from "../questions/support/ToggleMode";
import { useEffect, useState } from "react";
import { usePostDataHook } from "../../../hooks/PostDataHook";

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

const url = `${APIURL}questions/votes/`;

const LeftDiv = ({ id, owner, score, visibility  }) => {
  const current_user_id = 1;
  const [curr_score, setCurrScore] = useState(score);
  const [voted, setVoted] = useState();
  const votesdata = useRecoilValue(votesData);
  const { isLoading, postData } = usePostDataHook();

  // const votesdata = useRecoilValue(votesData);
  
  
  useEffect(() => {
    if(votesdata){
      setVoted(() => {
        const idx = votesdata.items.findIndex(item => ((item.post_id === id) && (item.post_type === 'question')));
        console.log(votesdata.items, idx)
        if(idx !== -1) {
          return votesdata.items[idx].vote_type
        } else {
          return '';
        }
      });
    }
  }, [votesdata]);
  
  console.log("votes", votesdata, votesdata);

  if (!owner || !votesdata) {
    return <Loading />;
  }

  // if (votesdata && votesdata.items){
  //   return <Loading />
  // }
  // console.log('descritption', votesdata.items);
  const handleVoting = (type) => {
    if (owner.id === current_user_id) {
      return;
    }

    if (
      voted &&
      ((voted === "upvote" && type === "upvote") ||
        (voted === "downvote" && type === "downvote"))
    ) {
      return;
    }

    const data = {
      user_id: current_user_id,
      post_type: "question",
      post_id: id,
      vote_type: type,
    };
    postData(url, data);

    setCurrScore((prev) => {
      // Voted
      console.log(type, prev, voted);
      if (voted !== "") {
        if (
          (voted === "upvote" && type === "upvote") ||
          (voted === "downvote" && type === "downvote")
        ) {
          return prev;
        } else {
          console.log("Inside", type, prev, voted);
          setVoted(type);
          return type === "upvote" ? prev + 2 : prev - 2;
        }
      } else {
        // Not voted
        setVoted(type);
        return type === "upvote" ? prev + 1 : prev - 1;
      }
    });
  };

//   if(isLoading){
//     return <Loading />
//   }

  return (
    <div className="w-[12%] h-full px-2 flex flex-col justify-start items-center space-y-2 pt-4">
      {/* Public/Private can only be applicable for questions */}
      {owner.id === current_user_id && (
        <ToggleMode qid={id} visibility={visibility} />
      )}
      <CaretUpSpan onClick={() => handleVoting("upvote")} voted={voted} />
      <span className="text-lg font-semibold">{curr_score}</span>
      <CaretDownSpan onClick={() => handleVoting("downvote")} voted={voted} />
      <BookmarkIcon />
      <ActivityIcon />
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

const RightDiv = ({ body, ...rest }) => {
  if (!rest.owner || !rest.tags) {
    // Inorder to use nested data, we should let it load first.
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-[90%] h-full flex flex-col justify-start items-start space-y-0 border-b ">
      <div className="w-full flex flex-col space-y-4 p-2">
        <span className="w-full p-2 leading-6 tracking-wide text-wrap whitespace-pre-wrap pb-2">
          {body}
        </span>
        <BaseTagListDisplay tags={rest.tags} />
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
        <InfoBox {...rest} />
      </div>
    </div>
  );
};

export default function Description({ ...props }) {
  if (props.score === undefined) {
    return <Loading />;
  }
  return (
    <div className="w-full h-fit flex flex-row justify-center items-start py-1 ">
      <LeftDiv {...props} />
      <RightDiv {...props} />
    </div>
  );
}
