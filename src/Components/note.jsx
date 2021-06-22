import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function notes(props){
    function handleClick(){
        props.onDelete(props.id);
    }
   return <div className= "notebox">
        <h3 className= "content">{props.title}</h3>
        <p className= "content">{props.content}</p>
        <button onClick={handleClick} className="delete"><DeleteIcon/></button>
         
    </div>;
}

export default notes;
