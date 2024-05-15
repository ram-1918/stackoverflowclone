import QContent from "./support/QContent.jsx";
import QFilters from "./support/QFilters.jsx";
import QHeader from "./support/QHeader.jsx";

export default function Content() {
    return (
        <div className="w-[90%] h-full border-l">
            <HeadDiv />
            <QContent />
        </div>
    )
}

const HeadDiv = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center border-b border-gray-200">
            <QHeader />
            <QFilters />
        </div>
    )
}