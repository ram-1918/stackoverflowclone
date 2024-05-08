import { Link } from "react-router-dom";
import BaseButton from "../../../base/BaseButtons";
import BaseLink from "../../../base/BaseLink";

const QHeader = () => {
    return (
        <div className="p-2 w-full flex flex-row justify-between items-center">
            <span className="font-medium text-3xl">All Questions</span>
            <Link to="/questions/post-new-question" className="bg-green-700 text-white p-2 rounded-lg hover:opacity-80">
                Add Question
            </Link>
        </div>
    );
};

export default QHeader;