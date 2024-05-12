import Additional from "./Additional";
import Content from "./Content";

import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { activeItem, votesData } from "../../../recoil_state/state";
import { useFetchDataHook } from "../../../hooks/GetDataHook";
import { Loading } from "../../base/Base";
import { APIURL } from "../../../hooks/UpdateDataHook";

const votesurl = `${APIURL}questions/votes`;

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
