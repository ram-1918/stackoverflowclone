// import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRecoilState } from "recoil";
import { questionsData } from "../../../../recoil_state/state";

const QFilters = () => {
    const questions = useRecoilState(questionsData);    // Retrieved from state
    const count = questions.length;

    return (
        <div className="p-2 w-full flex flex-row justify-between items-center">
            <DisplayCount count={count} title={count === 1 ? 'question': 'questions'} />
            <FilterSet />
        </div>
    );
};

export default QFilters;


const DisplayCount = ({count, title}) => (
    <span className={`text-lg font-normal`}>
        {count} {title}
    </span>
);

const FilterSet = () => {
    return (
        <div className="flex flex-row justify-start items-center space-x-2">
            <Filters1 />
            {/* <Filters2 /> */}
        </div>
    );
};

const FilterItem = ({text, active}) => <span style={{backgroundColor:active ? "lightgray": ""}} className="px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200">{text}</span>

const Filters1 = () => {
    return (
        <div className="border border-gray-400 p-0.5 rounded-md flex flex-row justify-around items-center space-x-2">
            <FilterItem text="Newest" active={true} />
            <FilterItem text="Active" />
            <FilterItem text="Closed" />
            <FilterItem text="Unanswered" />
        </div>
    );
};