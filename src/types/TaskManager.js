import Task from "./Task";

class TaskManager {
    constructor(list, setList, lastId, setLastId) {
        this.list = list;
        this.setList = setList;
        this.lastId = lastId;
        this.setLastId = setLastId;
    }
    add(message) {
        this.setLastId(current => current + 1);
        let newTask = new Task(this.lastId, message);
        this.setList(current => [
            newTask,
            ...current
        ]);
    }
    remove(taskId) {
        this.setList(current => current.filter((data, idx) => data.id != taskId));
    }
    changeCompleted(taskId, newCompleted) {
        const newList = this.list.map(task => {
            if (task.id != taskId) {
                return task;
            }
            return {
                ...task,
                completed: newCompleted
            };
        });
        this.setList(newList);
    }
    changeMessage(taskId, newMessage) {
        const newList = this.list.map(task => {
            if (task.id != taskId) {
                return task;
            }
            return {
                ...task,
                message: newMessage
            };
        });
        this.setList(newList);
    }
    getIndexById(taskId) {
        return this.list.findIndex(object => {
            return object.id == taskId;
        });
    }
}

export default TaskManager;