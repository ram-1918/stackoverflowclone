import Additional from "./Additional";
import Content from "./Content";

import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { activeItem, questionsData } from "../../../recoil_state/state";

export default function Questions() {
  const [, setActiveItem] = useRecoilState(activeItem);
  useEffect(() => {
    setActiveItem("questions");
  }, []);
  
  const questions = useRecoilValue(questionsData);
  console.log('questions', questions)

  return (
    <div className="h-full w-full flex flex-row">
      <Content />
      <Additional />
    </div>
  );
}
