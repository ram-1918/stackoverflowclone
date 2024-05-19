import TextEditor from "../../base/TextEditor";

export default function AskQuestionBaseLayout({ title, description, setInput, value, editor=false, field, visibilityQuestion, children }) {
  return (
    <div className="w-full border border-gray-200 p-4 rounded-md shadow-sm flex flex-col justify-start items-start space-y-1 capitalize">
      <AskQuestionTitle title={title} />
      <AskQuestionDescription description={description} />
      {
        !visibilityQuestion && (
          editor ? 
          <TextEditor setInput={setInput} field={field} value={value} /> :
          <AskQuestionInput setInput={setInput} field={field} value={value} />
        )
      }
      {children}
    </div>
  )
}

const AskQuestionTitle = ({ title }) => {
  return <span className="text-lg font-medium">{title}</span>;
};

const AskQuestionDescription = ({ description }) => {
  return <span className="text-sm font-light">{description}</span>;
};

const AskQuestionInput = ({ setInput, field, value }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setInput(prev => ({...prev, [field]: e.target.value}))}
      className="w-full outline-none p-1 border border-gray-300"
    />
  );
};
