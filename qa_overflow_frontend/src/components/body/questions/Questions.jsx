import Additional from "./Additional";
import Content from "./Content";

import { useRecoilState } from "recoil";
import { APIURL, useFetchDataHook } from "../../../hooks/GetDataHook";
import { useEffect } from "react";
import { questionsData } from "../../../recoil_state/state";

export default function Questions() {
  const url = `${APIURL}questions`;
  const [questions, setQuestions] = useRecoilState(questionsData);
  const { data, isLoading } = useFetchDataHook(url);
  console.log(questions, 'Quetions.jsx')
  useEffect(() => {
    setQuestions(data);
  }, [data, setQuestions]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full flex flex-row">
      <Content />
      <Additional />
    </div>
  );
}
