import { Link } from "react-router-dom";
import BaseButton from "../../../base/BaseButtons";
import BaseLink from "../../../base/BaseLink";
import { nativeColors } from "../../../../recoil_state/state";
import { useRecoilValue } from "recoil";

const QHeader = () => {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <div className="p-2 w-full flex flex-row justify-between items-center">
      <span className="font-medium text-3xl">All Questions</span>
      <Link
        style={{backgroundColor:native_colors['teal']['3']}}
        to="/features/questions/post-new-question"
        className="text-white p-2 rounded-lg hover:opacity-80"
      >
        Add Question
      </Link>
    </div>
  );
};

export default QHeader;
