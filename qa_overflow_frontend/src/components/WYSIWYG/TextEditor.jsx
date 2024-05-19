import { useCallback, useEffect, useMemo, useState } from "react";
import { Editor, Transforms, createEditor, Element, Range } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";
import { withHistory } from "slate-history";
import Toolbar from "./Toolbar";
import { customEditor } from "./editorutils";
import { SpanElement, CodeElement } from "./Elements";

// Tracks the location of the cursor on its change.
// We update the selection state every time the cursor moves
const trackCursor = (editor, setSelection) => {
  const { selection } = editor;
  if (selection && Range.isCollapsed(selection)) {
    setSelection(selection);
  } else {
    setSelection(null);
  }
};

const getStylesAtCursor = (node) => {
    const keys = Object.keys(node);
    const activeStyles = [];
    for(let key of keys) {
        if(key !== 'type' && key !== 'text') {
            activeStyles.push(key)
        }
    }
    return activeStyles;
}

// This function retrieves the node based on the selection anchor
const getNodeAtCursor = (editor, selection, setActiveStylesList) => {
  if (selection) {
    const [node, path] = Editor.node(editor, selection.anchor);
    const activeStyles = getStylesAtCursor(node);
    setActiveStylesList(activeStyles);
    console.log("Node at cursor:", node, "activeStyles", activeStyles);
    return node;
  }
  return null;
};

export default function TextEditor() {
  const [editor] = useState(() => withHistory(withReact(createEditor())));
  const [selection, setSelection] = useState(null);
  const [activeStylesList, setActiveStylesList] = useState([]);
  const initialValue = useMemo(
    () =>
      JSON.parse(localStorage.getItem("content")) || [
        {
          type: "paragraph",
          children: [{ text: "A line in a paragraph." }],
        },
      ],
    []
  );
  // Every time the selection state updates, getNodeAtCursor() is called
  useEffect(() => {
    if (selection) {
      const node = getNodeAtCursor(editor, selection, setActiveStylesList);
      console.log("Node at cursor:", node);
    }
  }, [selection]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <SpanElement {...props} />;
  }, []);

  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      activeStylesList={activeStylesList}
      onChange={(value) => {
        trackCursor(editor, setSelection);
        const isAstChange = editor.operations.some(
          (op) => "set_selection" !== op.type
        );
        if (isAstChange) {
          // Save the value to Local Storage.
          const content = JSON.stringify(value);
          localStorage.setItem("content", content);
        }
      }}
    >
      <Toolbar editor={editor} activeStylesList={activeStylesList} />
      <Editable
        className="h-full w-full p-2 outline-none focus:shadow-lg shadow-md rounded-md bg-white"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }
          switch (event.key) {
            case "`": {
              event.preventDefault();
              customEditor.toggleBlock(editor, "code");
              break;
            }
            case "b": {
              event.preventDefault();
              customEditor.toggleMark(editor, "bold");
              break;
            }
          }
        }}
      />
    </Slate>
  );
}
