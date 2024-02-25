import { useState } from "react";
import TaskListViewEntry from "./TaskListViewEntry";

function TaskListView(props) {
    const manager = props.manager;

    const [ messageInput, setMessageInput ] = useState('') 
    const [ createBtnActive, setCreateBtnActive] = useState(false);


    function handleMessageInput(event) {
        let newMessage = event.target.value;

        setMessageInput(newMessage);
        setCreateBtnActive(newMessage.length > 0);
    }
    function handleCreateBtn() {
        if(messageInput.length > 0)
        {
            manager.add(messageInput);
            setMessageInput('');
            setCreateBtnActive(false);
        }
    }


    return (
        <div class='container-md px-4 py-4'>
            <div id="tasklist-creator" class="input-group mb-4">
                <input id="tasklist-creator-input" onChange={handleMessageInput} value={messageInput} maxLength={140} type="text" class="form-control px-4 py-3" placeholder="What do you need to do?" aria-label="What do you need to do?" aria-describedby="controls-addtask"/>
                <button id="tasklist-creator-btn" onClick={handleCreateBtn} disabled={!createBtnActive} class="btn btn-primary px-4" type="button">+</button>
            </div>
            <section id="tasklist-container" class="py-2 rounded-3 shadow-sm">
                {manager.list.map(function(data) {
                    return (
                        <TaskListViewEntry key={data.id} id={data.id} completed={data.completed} message={data.message} manager={manager}/>
                    )
                })}
            </section>
        </div>
    )
}

export default TaskListView