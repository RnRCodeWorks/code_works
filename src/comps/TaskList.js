import React from "react";
import { useState } from 'react';
import TaskItem from './TaskItem';
import NewItemForm from "./NewItemForm";

function TaskList() {
    const [components, setComponents] = useState([]);

    function handleNewItemSubmit(){
        setComponents([...components, {id:'taskItem_'+Date.now(), title:'Title_'+Date.now(), description:'Test'}]);
    }
    
    return (
        <div>
            <div className='tasklist' >
                {components.map((component)=>(
                    <TaskItem title={component.title} description={component.description} key={component.id} />
                ))}
            </div>
            <NewItemForm addItemOnSubmit = {handleNewItemSubmit} />
        </div>
    )
}

export default TaskList;