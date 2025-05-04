import React, {useState} from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function TextSpace(props){
    const[text, setText] = useState("");
    const [correctedText, setCorrectedText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = 'AIzaSyC4sl5KpgV5nOfhz8ml6INI1yTPf8C8nZg';
    const genAI = new GoogleGenerativeAI(API_KEY);

    const handleOnChange= (event)=>{
        console.log("OnChange");
        setText(event.target.value);
        setCorrectedText("");
        setError(null);
    }
    const handleUpClick= ()=>{
        console.log("button was clicked !!");
        let Utext = text.toUpperCase();
        setText(Utext);
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleLoClick= ()=>{
        let LoText = text.toLowerCase()
        setText(LoText);
    }
    const handleSpace=()=>{
        let newt = text.replace(/\s+ /g, ' ')
        setText(newt);
    }

    const correctGrammar = async () => {
        if (!text) return;
        setLoading(true);
        setError(null);
        setCorrectedText("");

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});
            const prompt = `Correct the grammar of the following text:

"${text}"

Return only the corrected text.`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const correction = response.text();
            setCorrectedText(correction);
        } catch (err) {
            console.error("Error calling Gemini API:", err);
            setError("Failed to correct grammar. Please check the console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <br></br>
            <div className="mb-3">               
            <h3 className='head' >{props.title}</h3>
                <textarea className="form-control my-1" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#d2dff8' : 'white'}} id="myBox" rows="3" ></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary ' onClick={handleUpClick}> Convert to Uppercase </button>
            <button disabled={text.length === 0} className='btn btn-primary mx-4' onClick={handleLoClick}> Convert to Lowercase </button><br></br>
            <button disabled={text.length === 0} className='btn btn-secondary my-2' onClick={handleSpace}> Remove Extra Spaces </button>
            <button disabled={text.length === 0} className='btn btn-secondary my-2 mx-4' onClick={handleClear}> Clear </button>
            <button disabled={text.length === 0 || loading} className='btn btn-success my-2' onClick={correctGrammar}>
                {loading ? 'Correcting...' : 'Correct Grammar '}
            </button>

            <div>
                <h3 className= 'my-2'>Preview</h3>
                <p>{text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} words, {text.length} characters</p>
                <br></br>
                <h4>Your text:</h4><br></br>
                <p> {text.length>0?text:"Nothing to preview"}</p>
                {error && <div className="alert alert-danger mt-2">{error}</div>}
                {correctedText && (
                    <>
                        <h4 className="mt-3">Grammar Correction:</h4>
                        <p style={{ whiteSpace: 'pre-wrap' }}>{correctedText}</p>
                    </>
                )}
            </div>
        </>
    ); 
       
}