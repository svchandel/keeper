import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function InputBox(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    const [isExpanded, setIsExpanded] = useState(false);

    function expand(){
        setIsExpanded(true);
    }

    function unexpand(){
        setIsExpanded(false);
    }
    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        unexpand();
        event.preventDefault();
    }
    const style = {
        background : "#f5ba13",
        color: "white"
    };
   
    return (
        <div    className="inputbox">
        <form onFocus= {expand} >
            { isExpanded && <input  onChange={handleChange} onBlur={unexpand} name="title" type= "text" placeholder="Title" value= {note.title}  />}
            <textarea   onChange={handleChange} name= "content"  rows={isExpanded? "3":"1"} cols="40" placeholder="Take a note..."  value={note.content}/>
            <Zoom in={isExpanded}>
            <Fab  size= "small" style={style}  onClick={submitNote} className="add" ><AddIcon/></Fab>
            </Zoom>
        </form> 
        </div>
    );
}

export default InputBox;