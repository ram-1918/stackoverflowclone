import BaseButton from "../../base/BaseButtons";

export default function Title({title, ...rest}) {
    return (
        <div className="flex flex-row justify-between items-center border-b border-gray-300 pb-3">
            <div className="w-[85%] space-y-2">
                <span className="font-normal text-2xl">{title}</span>
                <MetaData {...rest} />
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