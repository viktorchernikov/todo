import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TaskListCreator(props) {
    const manager = props.manager;

    const [ messageInput, setMessageInput ] = useState('') 
    const [ createBtnActive, setCreateBtnActive] = useState(false);

    function onCreateTask() {
        if (messageInput.length > 0) {
            manager.add(messageInput);
            setMessageInput('');
            setCreateBtnActive(false);
            return true;
        }
        return false;
    }
    function handleOnKey(e) {
        if ((e.key === 'Enter' && onCreateTask()) || e.key == 'Escape') {
          document.activeElement.blur();
        }
    }
    function handleOnChange(event) {
        let newMessage = event.target.value;

        setMessageInput(newMessage);
        setCreateBtnActive(newMessage.length > 0);
    }
    function handleOnClick() { onCreateTask() };


    return (
        <div id="tasklist-creator" class="input-group mb-4">
            <input id="tasklist-creator-input" onKeyDown={handleOnKey} onChange={handleOnChange} value={messageInput} maxLength={140} type="text" class="form-control px-4 py-3" placeholder="What do you need to do?" aria-label="What do you need to do?" aria-describedby="controls-addtask"/>
            <button id="tasklist-creator-btn" onClick={handleOnClick} disabled={!createBtnActive} class="btn btn-primary px-4" type="button">
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}

export default TaskListCreator;