import Additional from "./Additional";
import Content from "./Content";

import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { activeItem } from "../../../recoil_state/state";

export default function Questions() {
  const [, setActiveItem] = useRecoilState(activeItem);
  useEffect(() => {setActiveItem('questions')}, []);

  return (
    <div className="h-full w-full flex flex-row">
      <Content />
      <Additional />
    </div>
  );
}
