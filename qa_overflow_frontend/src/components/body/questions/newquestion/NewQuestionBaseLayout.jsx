import TextEditor from "../../../base/TextEditor";
import ToggleMode from "../support/ToggleMode";

const NewQuestionBaseLayout = ({ title, description, setInput, value, editor=false, field, visibilityQuestion, children }) => {
  return (
    <div className="w-full border border-gray-200 p-4 rounded-md shadow-sm flex flex-col justify-start items-start space-y-1 capitalize">
      <NewQuestionTitle title={title} />
      <NewQuestionDescription description={description} />
      {
        !visibilityQuestion && (
          editor ? 
          <TextEditor setInput={setInput} field={field} value={value} /> :
          <NewQuestionInput setInput={setInput} field={field} value={value} />
        )
      }
      {children}
    </div>
  );
};

export default NewQuestionBaseLayout;

const NewQuestionTitle = ({ title }) => {
  return <span className="text-lg font-medium">{title}</span>;
};

const NewQuestionDescription = ({ description }) => {
  return <span className="text-sm font-light">{description}</span>;
};

const NewQuestionInput = ({ setInput, field, value }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setInput(prev => ({...prev, [field]: e.target.value}))}
      className="w-full outline-none p-1 border border-gray-300"
    />
  );
};
