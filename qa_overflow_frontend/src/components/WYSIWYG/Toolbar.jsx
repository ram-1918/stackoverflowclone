import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customEditor } from "./editorutils";
import { faBold, faCode, faItalic, faStrikethrough, faUnderline } from "@fortawesome/free-solid-svg-icons";
import { Editor, Transforms } from "slate";
import { useSlate } from "slate-react";

const props = [
  {
    type: "bold",
    toggleFunc: customEditor.toggleMark,
    icon: <FontAwesomeIcon icon={faBold} />,
  },
  {
    type: "italic",
    toggleFunc: customEditor.toggleMark,
    icon: <FontAwesomeIcon icon={faItalic} />,
  },
  {
    type: "underline",
    toggleFunc: customEditor.toggleMark,
    icon: <FontAwesomeIcon icon={faUnderline} />,
  },
  {
    type: "lineThrough",
    toggleFunc: customEditor.toggleMark,
    icon: <FontAwesomeIcon icon={faStrikethrough} />,
  },
  {
    type: "code",
    toggleFunc: customEditor.toggleBlock,
    icon: <FontAwesomeIcon icon={faCode} />,
  },
];

export default function Toolbar({editor, activeStylesList}) {
  return (
    <div className="border p-2 w-full h-fit flex flex-row justify-start items-center space-x-4 bg-gray-100">
      {props.map((obj, id) => (
        <ToolbarButton
          key={id}
          type={obj.type}
          icon={obj.icon}
          toggleFunc={obj.toggleFunc}
          editor={editor}
          activeStylesList={activeStylesList}
        />
      ))}
    </div>
  );
}

const ToolbarButton = ({ type, icon, toggleFunc, editor, activeStylesList }) => {
    // const { activeStylesList } = useSlate();
    const isActive = activeStylesList.filter(item => item === type)?.[0];
    console.log(activeStylesList);
    
  return (
    <button
      style={{ backgroundColor: isActive === type ? "lightgray" : "" }}
      className="px-2 py-1 hover:bg-gray-200"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFunc(editor, type);
      }}
    >
      {icon} 
      {/* {console.log(editor)} */}
    </button>
  );
};
