import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeItem, currentUser } from "../recoil_state/state";
import { useUpdateDataHook } from "../hooks/UpdateDataHook";
import { useEffect } from "react";
import { APIURL } from "../hooks/GetDataHook";
import QuestionDetails from "../components/body/QuestionDetails/QuestionDetails";
import AnswersBeginHeader from "../components/body/QuestionDetails/AnswersBeginHeader";
import QuestionDetailHeader from "../components/body/QuestionDetails/QuestionDetailHeader";
import AdditionalPanels from "../components/body/QuestionsList/AdditionalPanels";

export default function QuestionDetailPage() {
  const { qid } = useParams();
  const [, setActiveItem] = useRecoilState(activeItem);
  const { updateData } = useUpdateDataHook();
  const current_user = useRecoilValue(currentUser);

  // Active Menu Item
  useEffect(() => {
    setActiveItem("questions");
  }, []);

  // This updates the total viewers for a question with qid
  useEffect(() => {
    if (current_user) {
      const questionsurl = `${APIURL}questions/${qid}?viewers=${current_user.id}`;
      updateData(questionsurl, {});
    }
  }, [current_user]);

  return (
    <div className="border-l border-gray-200 w-full h-full p-4">
      <QuestionDetailHeader />
      <div className="flex flex-row space-x-2">
        <QuestionDetailView />
        <AdditionalPanels />
      </div>
    </div>
  );
}

const QuestionDetailView = () => {
  return (
    <div className="w-[80%] flex flex-col justify-start items-center space-y-2">
      <QuestionDetails />
      <AnswersBeginHeader />
      <QuestionDetails />
      <QuestionDetails />
      <QuestionDetails />
    </div>
  );
};
