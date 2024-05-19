import { questionsData } from "../../../recoil_state/state";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import InteractionPanel from "./InteractionPanel";  
import DetailsPanel from "./DetailsPanel";

export default function QuestionDetails() {
  const { qid } = useParams();

  const question = useRecoilValue(questionsData).items.filter(
    (item) => item.id === parseInt(qid))?.[0];

  return (
    <div className="w-full h-fit flex flex-row justify-center items-start py-1 ">
      {question && <InteractionPanel {...question} />}
      <DetailsPanel />
    </div>
  );
}