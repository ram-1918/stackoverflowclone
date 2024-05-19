import { useRecoilState, useRecoilValue } from "recoil";
import { currentUser, questionsData, votesData } from "../../../recoil_state/state";
import { useEffect, useState } from "react";
import { usePostDataHook } from "../../../hooks/PostDataHook";
import { APIURL, useUpdateDataHook } from "../../../hooks/UpdateDataHook";
import ToggleMode from "../QuestionsList/ToggleMode";
import { CaretDownSpan, CaretUpSpan } from "../../base/Base";
import { ActivityIcon, BookmarkIcon } from "../../base/BaseIcons";

const url = `${APIURL}questions/votes/`;

export default function InteractionPanel({ id, owner, visibility, score, upvotes, downvotes }) {
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