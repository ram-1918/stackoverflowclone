import BaseButton from "../../base/BaseButtons";

export default function Title({title}) {
    return (
        <div className="flex flex-row justify-between items-center border-b border-gray-400 pb-5">
            <div className="w-[85%] space-y-2">
                <span className="font-light text-2xl">{title}</span>
                <MetaData />
            </div>
            <BaseButton content="Ask Question" padding="0.5rem" bg="teal" text="white" />
        </div>
    )
}

const MetaData = () => {
    return (
        <div className="flex flex-row justify-start items-center space-x-5 font-light">
            <span>Asked 11 years, 5 months ago</span>
            <span>Viewed 1.9M times</span>
            <span>Modified 28 days ago</span>
        </div>
    )
}