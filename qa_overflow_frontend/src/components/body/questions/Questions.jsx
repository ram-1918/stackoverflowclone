import Additional from "./Additional";
import Content from "./Content";

import { useRecoilState } from "recoil";
import { APIURL, useFetchDataHook } from "../../../hooks/GetDataHook";
import { useEffect } from "react";
import { activeItem, questionsData } from "../../../recoil_state/state";
import { Loading } from "../../base/Loading";

export default function Questions() {
  const url = `${APIURL}questions`;
  const [, setQuestions] = useRecoilState(questionsData);
  const [, setActiveItem] = useRecoilState(activeItem);
  const { data, isLoading } = useFetchDataHook(url);

  useEffect(() => {setActiveItem('questions')}, [])
  
  useEffect(() => {
    setQuestions(data);
  }, [data, setQuestions]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full w-full flex flex-row">
      <Content />
      <Additional />
    </div>
  );
}
