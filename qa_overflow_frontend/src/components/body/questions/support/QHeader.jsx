import BaseButton from "../../../base/BaseButtons";

const QHeader = () => {
    return (
        <div className="p-2 w-full flex flex-row justify-between items-center">
            <span className="font-medium text-3xl">All Questions</span>
            <BaseButton content="Ask Question" bg="teal" text="white" border="teal" padding="0.5rem" />
        </div>
    );
};

export default QHeader;