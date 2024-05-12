import Description from "./Description";
import FollowUp from "./FollowUp";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeItem,
  questionsData,
  votesData,
} from "../../../recoil_state/state";
import { APIURL, useUpdateDataHook } from "../../../hooks/UpdateDataHook";
import { useFetchDataHook } from "../../../hooks/GetDataHook";
import { Loading } from "../../base/Base";
import { usePostDataHook } from "../../../hooks/PostDataHook";


export default function SingleQuestion() {
    const current_user_id = 3;
    const { qid } = useParams();
    // const questionsurl = `${APIURL}questions/${qid}`;
    // const [votesDataState, setVotesData] = useRecoilState(votesData);
  const [, setActiveItem] = useRecoilState(activeItem);
  const data = useRecoilValue(questionsData);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const { updateData } = useUpdateDataHook();

  useEffect(() => {
    const questionsurl = `${APIURL}questions/${qid}?viewers=${current_user_id}`;
    updateData(questionsurl, {})
  }, [])

  useEffect(() => {
    setActiveItem("questions");
  }, []); // Active Menu Item

  useEffect(() => {
    // useEffect observes data until it is available
    if (data) {
      const question = data.items.filter((item) => item.id === parseInt(qid));
      setCurrentQuestion(question[0]);
    }
  }, [data]);

//   useEffect(() => {
//     setVotesData(votesDataLocal);
//   }, [votesDataLocal, setVotesData]);

//   if (votesLoading) {
//     return <Loading />;
//   }
//   console.log("Votes", votesDataState);

  return (
    <div className="border-l border-gray-200 w-full h-full p-4">
      <Title {...currentQuestion} />
      <div className="flex flex-row space-x-2">
        <div className="w-[80%] flex flex-col justify-start items-center space-y-2">
          <Description {...currentQuestion} />
          <div className="w-full flex flex-row justify-between items-center bg-gray-50 p-2 font-medium">
            <span className="w-full text-lg">
              {currentQuestion.answer_count} Answers
            </span>
            <span className="flex flex-row items-center justify-end w-full">
              Sorted by:{" "}
              <span className="border border-gray-300 h-full w-72 py-2 px-2 rounded-lg text-normal">
                Highest Score (default)
              </span>
            </span>
          </div>
          <Description {...currentQuestion} />
          <Description {...currentQuestion} />
          <Description {...currentQuestion} />
          {/* <FollowUp /> */}
        </div>
        <div className="w-[20%] flex flex-col justify-start items-center space-y-3">
          <span className="w-full h-96 bg-teal-100">Unanswered Questions</span>
          <span className="w-full h-96 bg-gray-200">Hot Questions</span>
        </div>
      </div>
    </div>
  );
}
