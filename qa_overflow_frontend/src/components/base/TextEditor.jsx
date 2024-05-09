export default function TextEditor({setInput, field, value}) {
    return (
        <textarea 
        onChange={(e) => setInput(prev => ({...prev, [field]: e.target.value}))}
        value={value}
        rows="7" 
        cols="6" 
        className="w-full border"
        ></textarea>
    )
}