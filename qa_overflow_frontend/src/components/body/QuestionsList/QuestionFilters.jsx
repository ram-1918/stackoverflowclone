import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeFilterItem,
  nativeColors,
  questionsData,
} from "../../../recoil_state/state";
import { Loading } from "../../base/Base";

export default function QuestionFilters() {
  const questions = useRecoilValue(questionsData); // Retrieved from state
  return (
    <div className="p-2 w-full flex flex-row justify-between items-center">
      {questions ? (
        <DisplayCount
          count={questions.count}
          title={questions.count === 1 ? "question" : "questions"}
        />
      ) : (
        <Loading text="loading questions count" />
      )}
      <FilterSet />
    </div>
  );
}

const DisplayCount = ({ count, title }) => (
  <span className={`text-lg font-normal`}>
    {count} {title}
  </span>
);

const FilterSet = () => {
  return (
    <div className="flex flex-row justify-start items-center space-x-2">
      <Filters1 />
    </div>
  );
};

const Filters1 = () => {
  const [activeItem, setActiveFilterItem] = useRecoilState(activeFilterItem);
  return (
    <div className="border border-gray-400 p-0.5 rounded-md flex flex-row justify-around items-center space-x-2">
      <FilterItem
        text="Newest"
        active={activeItem === "newest"}
        onClick={() => setActiveFilterItem("newest")}
      />
      <FilterItem
        text="Active"
        active={activeItem === "active"}
        onClick={() => setActiveFilterItem("active")}
      />
      <FilterItem
        text="Closed"
        active={activeItem === "closed"}
        onClick={() => setActiveFilterItem("closed")}
      />
      <FilterItem
        text="Unanswered"
        active={activeItem === "unanswered"}
        onClick={() => setActiveFilterItem("unanswered")}
      />
    </div>
  );
};

const FilterItem = ({ text, active, onClick }) => {
  const native_colors = useRecoilValue(nativeColors);
  return (
    <span
      onClick={onClick}
      style={{ backgroundColor: active && native_colors["gray"]["1"] }}
      className="px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100"
    >
      {text}
    </span>
  );
};
