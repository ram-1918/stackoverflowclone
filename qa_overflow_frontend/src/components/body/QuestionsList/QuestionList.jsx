import OneQuestion from "./QuestionCard";
import { useRecoilValue } from "recoil";
import { questionsData } from "../../../recoil_state/state";
import { Loading } from "../../base/Base";

const QuestionList = () => {
  const questions = useRecoilValue(questionsData); // Retrieved from state
  return (
    <div className="w-full flex flex-col">
      {questions ? (
        questions.items.map((que) => <OneQuestion key={que.id} que={que} />)
      ) : (
        <Loading text="Loading Questions" />
      )}
    </div>
  );
};

export default QuestionList;