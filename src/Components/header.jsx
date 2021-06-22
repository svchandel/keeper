import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function header(){
    return <div className = "heading">
    <h1 className = "headingtext"><HighlightIcon fontSize="medium" />Keeper</h1>
    </div>;
}

export default header;