import { tasksExamples } from "../data/taskData";
import TaskList from "../components/TaskList";
import { Plus, ClipboardList, CheckCircle,  Clock } from "lucide-react";
import React, { useEffect } from "react";
import TaskAdd from "./TaskAdd";
import CountCard from "../components/CountCard";
import { list } from "postcss";

const getTheCount = (list, status) => {
    if (status === 'all') {
        return list.length
    }

    const newList = list.filter((item) => item.status === status)

    return newList.length
}

const Task = () => {
    const [tasks, setTask] = React.useState(
        JSON.parse(localStorage.getItem('storedTasks')) || []
    );
    const [showAddTask, setShowAddTask] = React.useState(false)
    const [filterWord, setFilterWord] = React.useState('all')
    const [showTasks, setShowTask] = React.useState(false)


    useEffect(() => {
        localStorage.setItem('storedTasks', JSON.stringify(tasks))
        setShowTask(true)
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


    return (
        <div className="absolute flex flex-col w-full max-w-lg h-screen bg-white overflow-scroll gap-10 py-10 px-6 md:px-10">
            <h1 className={`text-center text-5xl md:text-7xl text-gray-800 underline underline-offset-4 opacity-0
                transition duration-500 ${showTasks && 'opacity-100'}`}>
                To Do List
            </h1>

            <div className={`grid grid-cols-3 gap-2.5 md:gap-5 opacity-0 transition-all duration-500 ease-in-out ${showTasks && 'opacity-100'}`}>
                <CountCard title={'Total'} Icon={ClipboardList} count={getTheCount(tasks, 'all')}/>
                <CountCard title={'En cours'} Icon={Clock} count={getTheCount(tasks, 'en cours')} />
                <CountCard title={'Terminées'} Icon={CheckCircle} count={getTheCount(tasks, 'termine')} />
            </div>

            {
                showAddTask ? (
                    <TaskAdd onSubmitTask={handleNewTask} />
                ) : (
                    <div>
                        <div className={`py-2 mb-2 border-b border-gray-200 max-w-fit -100  opacity-0 transition duration-500 ${showTasks && 'opacity-100'}`}>
                            <label htmlFor="filterbyStatus" className="text-2xl font-semibold text-gray-700 px-2">
                                Filter: 
                            </label>

                            <select name="filter" id="filterbyStatus" onChange={handleFilter}
                                className="text-center text-lg capitalize italic outline-0">
                                <option value="all">Toutes</option>
                                <option value="en cours">En cours</option>
                                <option value="termine">Terminées</option>
                            </select>

                        </div>

                        <div className={`relative transition scale-y-0 origin-top duration-500 ease-in-out ${showTasks && 'scale-y-100'}`} >
                            {
                                !tasks ? (
                                    <p className="text-center text-sm text-gray-600">Aucune tâche</p>
                                ) : (
                                    <TaskList list={filteredTasks} handleRemoveItem={handleRemoveItem} />
                                )
                            }
                        </div>

                        <button
                            onClick={() => {
                                setShowAddTask(true)
                                setShowTask(false)
                            }}
                            className="fixed z-20 bottom-16 shadow-xl h-16 w-16 bg-gray-50 border-2 border-gray-100
                                        flex justify-center items-center rounded-full transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl
                                        hover:-translate-y-1 opacity-85">
                            <Plus className="h-full w-full stroke-1" />
                        </button>
                    </div>
                )
            }

        </div>
    );

}

export default Task;    