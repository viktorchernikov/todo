import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'

function TaskListEmptySuggest() {
    return (
        <div class="d-flex text-center flex-column w-100 px-4 py-4">
            <h1 class="text-primary">
                <FontAwesomeIcon icon={faDove}/>
            </h1>
            <h5>No tasks left to complete</h5>
            <p class="text-secondary mb-0">Add new tasks to keep track of them on <b>todo.</b></p>
        </div>
    )
}

export default TaskListEmptySuggest;