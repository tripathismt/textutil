import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
        //console.log("upper case clicked");
        let newText=Text.toUpperCase();
        setText(newText);
        props.showAlert("changed to upper case","success");
        //console.group(Text);
    }
    const handleloClick= ()=>{
        //console.log("upper case clicked");
        let newText=Text.toLowerCase();
        setText(newText);
        //console.group(Text);
        props.showAlert("changed to lower case","success");
    }
    const handleClearClick= () => {
        //console.log("upper case clicked");
        let newText=('');
        setText(newText);
        //console.group(Text);
        props.showAlert("text cleared","success");
        
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");
    }

    const handleSpace= ()=>
    {
        let newtext = Text.split(/[ ]+/);
         setText(newtext.join(" "));
         props.showAlert("spaces are managed","success");
    }
    const handleOnChange= (event)=>{
        //console.log("on chnage clicked");
        setText(event.target.value);
    }
    const [Text,setText] =useState("");
  return (
<>
    
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>

        <h1>{props.heading}</h1>

    <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'#031f3a':'white' , color:props.mode==='dark'?'white':'black'}}value={Text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To uppercase</button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert To lowercase</button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>ClearText</button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Space</button>

    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="my-3">YOUR TEXT SUMMARY</h2>
        <p>{Text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {Text.length} character</p>
        <p>
        {0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read
        </p>
        <h2>Preview</h2>
        <p>{Text.length===0?("enter the text to preview"):Text}</p>

    </div>
    </>
    
  )
}
