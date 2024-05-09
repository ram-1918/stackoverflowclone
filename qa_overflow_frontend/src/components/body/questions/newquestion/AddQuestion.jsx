import { useState } from "react";
import NewQuestionBaseLayout from "./NewQuestionBaseLayout";
import NewQuestionHeader from "./NewQuestionHeader";
import { APIURL } from "../../../../hooks/GetDataHook";
import { useRecoilState } from "recoil";
import { questionsData } from "../../../../recoil_state/state";
import BaseButton from "../../../base/BaseButtons";
import { usePostDataHook } from "../../../../hooks/PostDataHook";
import { useNavigate } from "react-router-dom";
// import NewQuestionHeader from "./NewQuestionHeader";

export default function AddQuestion() {
  /*
  1. API call to post answer
  2. Get response and store data into the questions in the state
  3. redirect to all questions page
  */

  const navigate = useNavigate();
  const { data, isLoading, error, postData } = usePostDataHook();
  const [questions, setQuestions] = useRecoilState(questionsData);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [expected, setExpected] = useState("");
  const [tags, setTags] = useState("");

  const handlePostNewQuestion = () => {
    const url = `${APIURL}questions/`;
    const newdata = {
      user_id: 2,
      title: title,
      body: details + "\n" + expected,
      tags: tags.split(","),
    };

    // Method that makes an API CALL which defined in PostDataHook
    postData(url, newdata); 

    // Update state questionData with the response from API Call
    setQuestions((old) => ({
      ...old,
      count: old["count"] + 1,
      items: [data, ...old["items"]],
    }));

    // Navigate to the list of questions
    navigate("/questions");
  };

  return (
    <div className="w-[80%] p-4 mb-4 space-y-4 border-l">
      <NewQuestionHeader />
      <NewQuestionBaseLayout
        title="title"
        description="Be specific and imagine you’re asking a question to another person."
        setInput={setTitle}
      />
      <NewQuestionBaseLayout
        title="What are the details of your problem?"
        description="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        setInput={setDetails}
        editor={true}
      />
      <NewQuestionBaseLayout
        title="What did you try and what were you expecting?"
        description="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
        setInput={setExpected}
        editor={true}
      />
      <NewQuestionBaseLayout
        title="Tags"
        description="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
        setInput={setTags}
      />
      <BaseButton
        onClick={() => handlePostNewQuestion()}
        content="Post your question"
        bg="green"
        text="white"
        width="9rem"
        padding="0.6rem"
      />
      {/* <CheckIfDuplicated /> */}
    </div>
  );
}
