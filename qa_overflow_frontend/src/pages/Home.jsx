import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { activeItem } from "../recoil_state/state";
import { withReact } from "slate-react";
import { createEditor } from "slate";
import TextEditor from "../components/WYSIWYG/TextEditor";

export default function Home() {
  const [, setActiveItem] = useRecoilState(activeItem);
  useEffect(() => {
    setActiveItem("home");
  }, []);

return (
    <div className="border-box w-full h-full aspect-video px-[10%] flex flex-col justify-start flex-wrap items-center divide-gray-200">
      <div className="w-full min-h-[70%] p-4">
        <TextEditor />
      </div>
    </div>
  );
}
