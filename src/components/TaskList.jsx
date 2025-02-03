import TaskItem from "./TaskItem";


const TaskList = ({list, handleRemoveItem}) => {
    return (
        <ul className="w-full">
            {
                list.map((item) =>
                    <TaskItem  key={item.id} item={item} onRemoveItem={handleRemoveItem} />
                )
            }
        </ul>
    )
}

export default TaskList;