import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { activeItem, questionsData } from "../recoil_state/state";
import QuestionList from "../components/body/QuestionsList/QuestionList";
import QuestionsHeader from "../components/body/QuestionsList/QuestionsHeader";
import QuestionFilters from "../components/body/QuestionsList/QuestionFilters";
import AdditionalPanels from "../components/body/QuestionsList/AdditionalPanels";


const BodyDiv = () => {
  return (
      <div className="w-[90%] h-full border-l">
          <HeadDiv />
          <QuestionList />
      </div>
  );
};

const HeadDiv = () => {
  return (
      <div className="w-full flex flex-col justify-start items-center border-b border-gray-200">
          <QuestionsHeader />
          <QuestionFilters />
      </div>
  );
};

export default function QuestionsPage() {
  const [, setActiveItem] = useRecoilState(activeItem);

  useEffect(() => {
    setActiveItem("questions");
  }, []);
  
  const questions = useRecoilValue(questionsData);
  console.log('questions', questions)

  return (
    <div className="h-full w-full flex flex-row">
      <BodyDiv />
      <AdditionalPanels />
    </div>
  );
}
