import React from "react";

const currentYear= new Date().getFullYear();

function footer(){
    return <footer>Copyright &copy; {currentYear}</footer>;
    
}

export default footer;