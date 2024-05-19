import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-go';

export const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const SpanElement = (props) => {
    let style = {};
    if(props.leaf.bold) style.fontWeight = "bold"
    if(props.leaf.italic) style.fontStyle = 'italic'
    if(props.leaf.underline) style.textDecoration = 'underline'
    if(props.leaf.lineThrough) style.textDecoration = 'line-through'
  return (
    <span
      {...props.attributes}
      style={style}
    >
      {props.children}
    </span>
  );
};

export const CodeElement = props => {
    const { attributes, children, element } = props;
    // const language = 'javascript';
    // const className = `language-${language}`;
    // const text = children.map(child => {
    //     return child.props.leaf && child.props.leaf.text;
    //   }).join('');
    //   const highlighted = Prism.highlight(text, Prism.languages[language], language);

  return (
    <pre className="bg-gray-100 text-gray-900 rounded" {...attributes}>
      <code> {children} </code>
    </pre>
  );
};
