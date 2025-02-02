import { tasksExamples } from "../data/taskData";
import TaskList from "../components/TaskList";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import TaskAdd from "./TaskAdd";


const Task = () => {
    const [tasks, setTask] = React.useState(
        JSON.parse(localStorage.getItem('storedTasks')) || []
    );
    const [showAddTask, setShowAddTask] = React.useState(false)
    const [filterWord, setFilterWord] = React.useState('all')

    useEffect(() => {
        localStorage.setItem('storedTasks', JSON.stringify(tasks))
    }, [tasks])    

    const getBiggestId = () => {
        let biggestId = 0
        tasks.forEach((task) => {
            if (task.id > biggestId) {
                biggestId = task.id
            }
        })

        return biggestId
    }

    const handleNewTask = (task) => {
        const taskObj = {
            id: getBiggestId() + 1,
            title: task.title,
            description: task.description,
            status: 'termine',
            start: new Date().toLocaleDateString('fr-Fr'),
            end: null,
        }
        setTask([...tasks, taskObj]);

        console.log('mes tâches: ', tasks)
        
        setShowAddTask(false)
    }

    const handleEditItem = () => {  
        // TODO
    }

    const handleRemoveItem = (id) => {
        const newTasks = tasks.filter((task) => 
            task.id != id
        )

        setTask(newTasks)
    }

    const handleFilter = (e) => {
        setFilterWord(e.target.value)
    }

    const filteredTasks = tasks.filter((task) => {
        if (filterWord === 'all') {
            return task
        } else {
            return task.status === filterWord
        }
    }
    )

    console.log('fitered tasks: ', filteredTasks)


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

                            <select name="filter" id="filterbyStatus" onChange={handleFilter}>
                                <option value="all">Tous</option>
                                <option value="en cours">En cours</option>
                                <option value="termine">Terminée</option>
                            </select>

                        </div>

                        {
                            !tasks ? (
                                <p className="text-center text-sm text-gray-600">Aucune tâche</p>
                            ) : (
                                <TaskList list={filteredTasks} handleRemoveItem={handleRemoveItem}/>
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