import { tasksExamples } from "../data/taskData";
import TaskList from "../components/TaskList";
import { Plus } from "lucide-react";
import React from "react";
import TaskAdd from "./TaskAdd";


const Task = () => {
    const [tasks, setTask] = React.useState([...tasksExamples]);
    const [showAddTask, setShowAddTask] = React.useState(false)

    const handleNewTask = (task) => {
        console.log({ ...task })
        setTask([...tasks, task]);

        console.log('mes tâches: ', tasks)
        
        setShowAddTask(false)
    }

    return (
        <div className="relative flex flex-col w-full max-w-lg bg-white">
            <h1 className="text-center">To Do List</h1>

            {
                showAddTask ? (
                    <TaskAdd onSubmitTask={handleNewTask} />
                ) : (
                    <div>
                        <div>
                            <label htmlFor="filterbyStatus">Filter: </label>

                            <select name="filter" id="filterbyStatus">
                                <option value="all">Tous</option>
                                <option value="ongoing">En cours</option>
                                <option value="done">Terminée</option>
                            </select>

                        </div>

                        {
                            !tasks ? (
                                <p className="text-center text-sm text-gray-600">Aucune tâche</p>
                            ) : (
                                <TaskList list={tasks} />
                            )
                        }

                        <button
                            onClick={() => setShowAddTask(true)}
                            className="absolute bottom-16 right-14 shadow-xl h-16 w-16 bg-gray-50 border-2 border-gray-100
                                        flex justify-center items-center rounded-full transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl
                                        hover:-translate-y-3">
                            <Plus className="h-full w-full stroke-1" />
                        </button>
                    </div>
                )
            }

        </div>
    );

}

export default Task;    