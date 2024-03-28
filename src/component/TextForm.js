import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Upper case was clicked " +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Upper Case","Succes:");
  }
  const handleloClick=()=>{
    // console.log("Upper case was clicked " +text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lower case","Success:");
  }
  const handleOnChange=(event)=>{
    console.log("Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');

  return ( 
  <>
  <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.hading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert to Upper Case</button>
  <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lower Case</button>
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words {text.length}characters</p>
  <p>{0.008*text.split(" ").length} Minute read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
  </>
  )
}
