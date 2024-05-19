import { Editor, Element, Text, Transforms } from "slate";

export const customEditor = {
    isMarkActive(editor, format) {
        const [match] = Editor.nodes(editor, {
            match: n => n[format] === true,
            universal: true,
        });
        return !!match;
    },

  isBlockActive(editor, format) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === format,
      universal: true
    });
    return !!match;
  },

  toggleMark(editor, format) {
    const isActive = customEditor.isMarkActive(editor, format);
    Transforms.setNodes(
        editor,
        { [format]: isActive ? undefined : true },
        { match: n => Text.isText(n), split: true }
    )
  },

  toggleBlock(editor, format) {
    const isActive = customEditor.isBlockActive(editor, format);
    // Returns the trasformed text based on isActive/match: if active then non-code-block else code-block
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : format },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },
};
