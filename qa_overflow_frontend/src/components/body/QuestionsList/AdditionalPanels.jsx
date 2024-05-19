export default function AdditionalPanels() {
    return (
        <div className="w-[20%] flex flex-col justify-start items-center space-y-3">
          <span className="w-full h-96 bg-gray-200">Related Questions</span>
          <span className="w-full h-96 bg-teal-100">Unanswered Questions</span>
        </div>
    )
}