import { useState } from "react";

function TaskListViewEntry(props) {
  const id = props.id;
  const initCompleted = props.completed;
  const initMessage = props.message;
  const manager = props.manager;

  const [ message, setMessage ] = useState(initMessage);
  const [ completed, setCompleted ] = useState(initCompleted);


  function handleEditMsgEnd() {
    manager.changeMessage(id, message);
  }
  function handleEditMsgChange(event) {
    setMessage(event.target.value);
  }
  function handleEditMsgKey(e) {
    if (e.key === 'Enter' && message.length > 0) {
      document.activeElement.blur();
      handleEditMsgEnd();
    }
    else if (e.key == "Escape")
    {
      document.activeElement.blur();
      setMessage(initMessage);
    }
  }
  function handleEditMsgBlur() {
    if (message.length > 0) {
      handleEditMsgEnd();
    }
    else{
      setMessage(initMessage);
    }
  }
  function handleCheck(event) 
  {
    let checked = event.target.checked
    setCompleted(checked);
    manager.changeCompleted(id, checked);
  }
  function handleDelete() {
    manager.remove(id);
  }

  return (
    <div class="tasklist-blob d-flex justify-content-between px-4 py-2">
        <div class="tasklist-blob-mainbar form-check d-flex">
            <input onChange={handleCheck} checked={completed} class="form-check-input py-3 px-3 rounded-5" type="checkbox" value=""/>
            <input type="text" onBlur={handleEditMsgBlur} onChange={handleEditMsgChange} onKeyDown={handleEditMsgKey} value={message} class="tasklist-blob-message ms-3 mt-1"/>
        </div>
        <button onClick={handleDelete} type="button" class="tasklist-blob-delete btn rounded-5">
            X
        </button>
    </div>
  )
}

export default TaskListViewEntry
