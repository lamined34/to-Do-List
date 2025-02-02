import { tasks } from "../data/taskData";
import TaskList from "../components/TaskList";


const Task = () => {
    return (
        <div>
            <h1>To Do List</h1>

            <div>
                <label htmlFor="filterbyStatus">Filter</label>

                <select name="filter" id="filterbyStatus">
                    <option value="ongoing">En cours</option>
                    <option value="done">Terminée</option>
                </select>

            </div>

            <TaskList list={tasks} />
        </div>
    );

}

export default Task;    