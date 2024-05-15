import { useRecoilValue } from "recoil";
import { questionsData } from "../../../recoil_state/state";
import BaseButton from "../../base/BaseButtons";
import { Loading } from "../../base/Base";

export default function Title({ qid }) {
    const question = useRecoilValue(questionsData).items.filter(item => item.id === parseInt(qid))?.[0];

    return (
        <div className="flex flex-row justify-between items-center border-b border-gray-300 pb-3">
            <div className="w-[85%] space-y-2">
                <span className="font-normal text-2xl">{question ? question.title : 'No question'}</span>
                {question ? <MetaData {...question} /> : <Loading text="Loading meta data" />}
            </div>
            <BaseButton content="Ask Question" padding="0.5rem" bg="teal" text="white" />
        </div>
    )
}

const MetaData = ({views, from_last_activity, from_created}) => {
    return (
        <div className="flex flex-row justify-start items-center space-x-5 text-sm font-light">
            <span>Asked {from_created}</span>
            <span>Viewed {views} times</span>
            <span>Modified {from_last_activity}</span>
        </div>
    )
}