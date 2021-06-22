import React, { useState } from "react";
import Header from "./Components/header";
import Notes from "./Components/note";
import Footer from "./Components/footer";
import InputBox from "./Components/inputbox";

function App(){
    const [items, setItem] = useState([]);
    function addItem(note){
        setItem(prevItem => {
            return [...prevItem, note];
        })
    }

    function deleteItem(id){
        setItem(prevItem => {
            return prevItem.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    
    return <div>
                <Header />
                <InputBox onAdd= {addItem}/>
                {items.map((noteItem, index) => (
                 <Notes
                    key= {index}
                    id= {index}
                    onDelete= {deleteItem}
                    title = {noteItem.title}
                    content = {noteItem.content}
                 />)
                )}
                <Footer />
           </div>;

}

export default App;