import { faCaretDown, faCaretUp, faHistory, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CaretUpIcon = () => <FontAwesomeIcon icon={faCaretUp} />;
const CaretDownIcon = () => <FontAwesomeIcon icon={faCaretDown} />;
const BookmarkIcon = () => <i className="fa fa-bookmark-o text-xl"></i>
const ActivityIcon = () => <FontAwesomeIcon icon={faHistory} />;

const CaretUpSpan = () => {
    return (
        <span className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center text-xl">
            {<CaretUpIcon />}
        </span>
    );
};

const CaretDownSpan = () => {
    return (
        <span className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center text-xl">
            {<CaretDownIcon />}
        </span> 
    );
};

const LeftDiv = () => {
    const count = 3452;
    return (
        <div className="w-[10%] h-full px-2">
            <div className="flex flex-col justify-start items-center space-y-2">
                <CaretUpSpan />
                <span className="text-lg font-medium">{count}</span>
                <CaretDownSpan />
                <BookmarkIcon />
                <ActivityIcon />
            </div>
        </div>
    );
};

const InfoBox = () => {
    return (
        <div className="flex flex-col justify-start items-start bg-blue-100 p-2 rounded-lg">
            <span>asked Jun 27, 2012 at 13:51</span>
            <div className="flex justify-start items-center space-x-2">
                <span className="bg-red-400 flex justify-center items-center rounded-full w-8 h-8"><FontAwesomeIcon icon={faUser} className="text-lg" /></span>
                <div className="flex flex-col justify-start items-start">
                    <span>UserName</span>
                    <span>500k - 53 - 501 - 548</span>
                </div>
            </div>
        </div>
    )
}

const RightDiv = ({description}) => {
    return (
        <div className="w-[90%] h-full flex flex-col justify-start items-center space-y-2">
            <span className="leading-6 tracking-wide text-wrap whitespace-pre-wrap border-b border-gray-300 pb-2">
                {description}
            </span>
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-around items-center space-x-4">
                    <span>Share</span>
                    <span>Edit</span>
                    <span>follow</span>
                </div>
                <InfoBox />
            </div>
        </div>
    );
};

export default function Description({description}) {
    return (
        <div className="w-full h-full flex flex-row justify-center items-start py-4">
            <LeftDiv />
            <RightDiv description={description} />
        </div>
    )
}