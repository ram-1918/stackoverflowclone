export default function AnswersBeginHeader({...currentQuestion}) {
    return (
        <div className="w-full flex flex-row justify-between items-center bg-gray-50 p-2 font-medium">
            <AnswerCountDiv {...currentQuestion} />
            <FilterDiv />
        </div>
    )
}

const AnswerCountDiv = ({answer_count}) => {
    return (
        <span className="w-full text-lg">
            {answer_count} Answers
        </span>
    );
};

const FilterDiv = () => {
    return (
        <span className="flex flex-row items-center justify-end w-full">
            Sorted by:{" "}
            <span className="border border-gray-300 h-full w-72 py-2 px-2 rounded-lg text-normal">
                Highest Score (default)
            </span>
        </span>
    );
};

