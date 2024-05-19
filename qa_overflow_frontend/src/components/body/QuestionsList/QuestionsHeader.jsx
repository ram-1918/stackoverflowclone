import { Link } from "react-router-dom";
import { nativeColors } from "../../../recoil_state/state";
import { useRecoilValue } from "recoil";

export default function QuestionsHeader() {
  return (
    <div className="p-2 w-full flex flex-row justify-between items-center">
      <span className="font-medium text-3xl">All Questions</span>
      <AskQuestionButton />
    </div>
  );
}

const AskQuestionButton = () => {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <Link
      style={{backgroundColor:native_colors['teal']['3']}}
      to="/features/questions/post-new-question"
      className="text-white p-2 rounded-lg hover:opacity-80"
    >
      Add Question
    </Link>
  )
}