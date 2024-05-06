// import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QFilters = () => {
    const count = '2,453,345'
    return (
        <div className="p-2 w-full flex flex-row justify-between items-center">
            <DisplayCount count={count} />
            <FilterSet />
        </div>
    );
};

export default QFilters;

// const FilterIcon = () => <FontAwesomeIcon icon={faFilter} />

const DisplayCount = ({count}) => (
    <span className="text-normal after:content-['questions'] after:px-1">
        {count}
    </span>
);

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

// const Filters2 = () => {
//     return (
//         <button>{<FilterIcon />} Filters</button>
//     )
// }

const FilterSet = () => {
    return (
        <div className="flex flex-row justify-start items-center space-x-2">
            <Filters1 />
            {/* <Filters2 /> */}
        </div>
    );
};
