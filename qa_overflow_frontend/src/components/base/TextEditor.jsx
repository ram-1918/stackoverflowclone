export default function TextEditor({setInput}) {
    return (
        <textarea 
        onChange={e => setInput(e.target.value)}
        rows="7" 
        cols="6" 
        className="w-full border"
        ></textarea>
    )
}