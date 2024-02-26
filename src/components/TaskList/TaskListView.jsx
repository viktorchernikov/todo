import TaskListEmptySuggest from "./TaskListEmptySuggest";
import TaskListViewEntry from "./TaskListViewEntry";
import TaskListCreator from './TaskListCreator';

function TaskListView(props) {
    const manager = props.manager;

    function getContent() {
        const todoCount = manager.list.filter(task => task.completed == false).length;
        const completeCount = manager.list.length - todoCount;

        let main, secondary;
        if (todoCount > 0) {
            main = manager.list.map(function(data) {
                if (!data.completed) {
                    return (<TaskListViewEntry key={data.id} id={data.id} completed={data.completed} message={data.message} manager={manager}/>);
                }
            });
        }
        else {
            main = <TaskListEmptySuggest/>;
        }
        if (completeCount > 0) {
            secondary = <p class="text-secondary px-4 pt-3">You've completed {completeCount} tasks!</p>
        }


        return (
            <>
                {main}
                {secondary}
            </>
        )
    }


    return (
        <div class='container-md px-4 py-4'>
            <TaskListCreator manager={manager}/>
            <section id="tasklist-container" class="py-2 rounded-3 shadow-sm">
                {getContent()}
            </section>
        </div>
    )
}

export default TaskListView