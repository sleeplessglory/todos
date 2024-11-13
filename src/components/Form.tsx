import {useState} from 'react';
import List from './List';
export default function Form() {
    const [newTask, setNewTask] = useState("");

    const [tasks, setTasks] = useState([]);

    function handleInputChange(){
        
    }

    function addTask(){
        
    }

    return(
        <>      
            <form className="form">
                <button className="form__button" onClick={addTask} data-test="">&#x2335;</button>
                <input className="form__input" 
                    type="text" 
                    placeholder="What needs to be done?" 
                    value={newTask} 
                    onChange={handleInputChange}
                    spellCheck={false}
                    data-test="" />
            </form>
            <List />
        </>
    );
}