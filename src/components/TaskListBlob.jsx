function TaskListBlob(props) {
  return (
    <div class="tasklist-blob d-flex justify-content-between px-4 py-2">
        <div class="form-check d-flex-inline">
            <input class="form-check-input py-3 px-3 rounded-5" type="checkbox" value=""/>
            <label class="form-check-label ms-3 mt-2">
                {props.title}
            </label>
        </div>
        <button type="button" class="tasklist-blob-delete btn rounded-5">
            X
        </button>
    </div>
  )
}

export default TaskListBlob
