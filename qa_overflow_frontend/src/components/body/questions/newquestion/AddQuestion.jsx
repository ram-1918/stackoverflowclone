import { useEffect, useState } from "react";
import { APIURL } from "../../../../hooks/GetDataHook";
import { useRecoilState } from "recoil";
import { activeItem, questionsData } from "../../../../recoil_state/state";
import { usePostDataHook } from "../../../../hooks/PostDataHook";
import { useNavigate } from "react-router-dom";
import { BaseDiscardDraft, BaseVisiblityToggle } from "../../../base/Base";
import NewQuestionBaseLayout from "./NewQuestionBaseLayout";
import NewQuestionHeader from "./NewQuestionHeader";
import BaseButton from "../../../base/BaseButtons";

const template = {
  title: "",
  body1: "",
  body2: "",
  tags: "",
  visibility: true,
}

export default function AddQuestion() {
  /*
  1. API call to post answer
  2. Get response and store data into the questions in the state
  3. redirect to all questions page
  */

  const navigate = useNavigate();
  const { data, error, postData } = usePostDataHook(); // HOOK
  const [, setQuestions] = useRecoilState(questionsData);
  const [, setActiveItem] = useRecoilState(activeItem);

  useEffect(() => {
    setActiveItem("questions");
  }, []);

  //Save to draft by default
  const [draftCopy, setDraftCopy] = useState(() =>
    localStorage.getItem("questiondraft")
  );

  const [newQuestion, setNewQuestion] = useState({
    title: draftCopy ? JSON.parse(draftCopy)["title"] : "",
    body1: draftCopy ? JSON.parse(draftCopy)["body1"] : "",
    body2: draftCopy ? JSON.parse(draftCopy)["body2"] : "",
    tags: draftCopy ? JSON.parse(draftCopy)["tags"] : "",
    visibility: draftCopy ? JSON.parse(draftCopy)["visibility"] : true,
  });

  useEffect(() => {
    const newQuestionStr = JSON.stringify(newQuestion);
    setDraftCopy(newQuestionStr);
    localStorage.setItem("questiondraft", newQuestionStr);
  }, [newQuestion]);

  const handlePostNewQuestion = () => {
    const url = `${APIURL}questions/`;

    const newdata = {
      owner: 1,
      title: newQuestion["title"],
      body: newQuestion["body1"] + "\n" + newQuestion["body2"],
      tags: newQuestion["tags"].split(","),
      visibility: newQuestion["visibility"],
    };

    // Method that makes an API CALL which defined in PostDataHook
    postData(url, newdata);

    if (error === null) {
      // Update state questionData with the response from API Call
      setQuestions((prev) => ({
        ...prev,
        count: prev["count"] + 1,
        items: [data, ...prev["items"]],
      }));

      // Navigate to the list of questions
      navigate("/features/questions");
    }
  };

  return (
    <div className="w-[80%] p-4 mb-4 space-y-4 border-l">
      <NewQuestionHeader />
      <NewQuestionBaseLayout
        title="title"
        description="Be specific and imagine you’re asking a question to another person."
        value={newQuestion["title"]}
        setInput={setNewQuestion}
        field="title"
      />
      <NewQuestionBaseLayout
        title="What are the details of your problem?"
        description="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        value={newQuestion["body1"]}
        setInput={setNewQuestion}
        field="body1"
        editor={true}
      />
      <NewQuestionBaseLayout
        title="What did you try and what were you expecting?"
        description="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
        value={newQuestion["body2"]}
        setInput={setNewQuestion}
        field="body2"
        editor={true}
      />
      <NewQuestionBaseLayout
        title="Tags"
        description="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
        value={newQuestion["tags"]}
        setInput={setNewQuestion}
        field="tags"
      />
      <NewQuestionBaseLayout
        title="Visibility of the question"
        description="By default it will be a public question, you can also make your question private now and post it confidently later."
        visibilityQuestion={true}
      >
        <BaseVisiblityToggle
          visibleMode={newQuestion["visibility"]}
          onClick={() =>
            setNewQuestion((prev) => ({
              ...prev,
              ["visibility"]: !prev["visibility"],
            }))
          }
        />
      </NewQuestionBaseLayout>
      <div className="flex flex-row justify-start items-center space-x-4">
        <BaseButton
          onClick={() => handlePostNewQuestion()}
          content="Post your question"
          bg="green"
          text="white"
          width="9rem"
          padding="0.6rem"
        />
        <BaseDiscardDraft draft_key="questiondraft" template={template} setFunc={setNewQuestion} />
      </div>

      {/* <CheckIfDuplicated /> */}
    </div>
  );
}
