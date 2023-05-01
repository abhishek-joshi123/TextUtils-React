import React, {useState} from 'react'


export default function TextForm(props) {

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }

    const HandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const HandleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText) 
        props.showAlert("Converted to Lowercase!", "success")
    }
    
    const ClearOnClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been Cleared!", "success")
    }
    
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Your Text is now optimized!", "success")
    }
    
    const CopyText = () => { 
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!", "success")
    }

    const [text, setText] = useState("enter text here")
    // text = "New Text"    wrong way..
    // setText("New Text")   //   right way..
    return ( 
        <>
            <div className='container' style = {{color: props.Mode === 'dark'?'white':'black'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleOnChange} style = {{backgroundColor: props.Mode === 'dark'?'#293131':'white', color: props.Mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button  disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleUpClick}>Convert to Uppercase</button>
                <button  disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleLwClick}>Convert to Lowercase</button>
                <button  disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={ClearOnClick}>Click to clear</button>
                <button  disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
                <button  disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={CopyText}>Copy Text</button>
            </div>

            <div className="container my-3" style = {{color: props.Mode === 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 && text !=='enter text here'?text:'Nothing to preview!'}</p>
            </div>
      </>
    )
}
