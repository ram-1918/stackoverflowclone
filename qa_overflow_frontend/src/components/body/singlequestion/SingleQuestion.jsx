import Description from "./Description";
import FollowUp from "./FollowUp";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeItem, currentQuestionData, currentUser, questionsData } from "../../../recoil_state/state";
import { APIURL, useUpdateDataHook } from "../../../hooks/UpdateDataHook";
import RightDiv from "./Extras";
import Separator from "./Separator";

export default function SingleQuestion() {
  const { qid } = useParams();
  const current_user = useRecoilValue(currentUser);
  const [, setActiveItem] = useRecoilState(activeItem);
  const questions = useRecoilValue(questionsData);
  const { updateData } = useUpdateDataHook();
  // const [, setCurrentQuestion] = useRecoilState(currentQuestionData);

  useEffect(() => {
    setActiveItem("questions");
    console.log("Single questions component");
  }, []); // Active Menu Item

  useEffect(() => {
    if(current_user){
      const questionsurl = `${APIURL}questions/${qid}?viewers=${current_user.id}`;
      updateData(questionsurl, {});
    }
  }, [current_user]);

  // useEffect(() => {
  //   // useEffect observes data until it is available
  //   if (questions) {
  //     const question = data.items.filter((item) => item.id === parseInt(qid))?.[0];
  //     // setCurrentQuestion(question);
  //   }
  // }, [data]);

  return (
    <div className="border-l border-gray-200 w-full h-full p-4">
      <Title qid={qid} />
      <div className="flex flex-row space-x-2">
        <QuestionAnswerDescriptions />
        <RightDiv />
      </div>
    </div>
  );
}

const QuestionAnswerDescriptions = () => {

  return (
    <div className="w-[80%] flex flex-col justify-start items-center space-y-2">
      <Description />
      <Separator />
      <Description />
      <Description />
      <Description />
      {/* <FollowUp /> */}
    </div>
  );
};
