import React from "react";
import '../styles/NewItemForm.css';

function NewItemForm(props) {
    return (
        <form className="newItemForm" onSubmit={props.addItemOnSubmit}>
            <label>Title:</label>
            <input type='text' />
            <label>Description:</label>
            <input type='text' />
            <button type='submit'>Add Item</button>
        </form>
    );
}

export default NewItemForm;