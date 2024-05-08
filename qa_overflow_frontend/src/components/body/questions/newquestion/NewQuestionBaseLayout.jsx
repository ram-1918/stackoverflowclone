import TextEditor from "../../../base/TextEditor";

const NewQuestionBaseLayout = ({ title, description, setInput, editor=false }) => {
  return (
    <div className="w-full border border-gray-200 p-4 rounded-md shadow-sm flex flex-col justify-start items-start space-y-1 capitalize">
      <NewQuestionTitle title={title} />
      <NewQuestionDescription description={description} />
      {
        editor ? 
        <TextEditor setInput={setInput} /> :
        <NewQuestionInput setInput={setInput} />
      }
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

const NewQuestionInput = ({ setInput }) => {
  return (
    <input
      type="text"
      onChange={(e) => setInput(e.target.value)}
      className="w-full outline-none p-1 border border-gray-300"
    />
  );
};
