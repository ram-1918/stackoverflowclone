export default function BaseButton({content, bg, border, text, width, padding}) {
    // Dynamic Styling overrides the style defined in the classname
    const dynamicStyle = {
        backgroundColor:bg, 
        borderColor:border, 
        color:text, 
        width:width,
        padding: padding
    };
    return (
        <button 
        style={dynamicStyle}
        className="px-2 p-1 border rounded-lg hover:opacity-70 text-sm"
        >{content}</button>
    )
}