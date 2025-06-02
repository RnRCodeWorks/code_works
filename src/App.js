import { useState } from 'react';
import './App.css';
import Navbar from './comps/Navbar';
import TaskItem from './comps/TaskItem';

function App() {
  const [components, setComponents] = useState([]);

  function handleAddItemClick(){
    setComponents([...components, {id:'taskItem_'+Date.now(), title:'Title_'+Date.now(), description:'Test'}]);
  }
  return (
    <div className="App">
      <Navbar addItemOnClick={handleAddItemClick} />
      {components.map((component)=>(
        <TaskItem title={component.title} description={component.description} key={component.id} />
      ))}
    </div>
  );
}

export default App;
