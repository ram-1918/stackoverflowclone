import OneQuestion from "./OneQuestion";
import { useRecoilValue } from "recoil";
import { questionsData } from "../../../../recoil_state/state";
import { Loading } from "../../../base/Loading";

const QContent = () => {
  const questions = useRecoilValue(questionsData); // Retrieved from state
  // This helps load nested data
  if (!questions) {
    return <Loading />;
  }
  return (
    <div className="w-full flex flex-col">
      {questions.items.map((que) => (
        <OneQuestion key={que.id} que={que} />
      ))}
    </div>
  );
};

export default QContent;
