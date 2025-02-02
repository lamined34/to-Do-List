import TaskItem from "./TaskItem";


const TaskList = ({list, handleRemoveItem}) => {
    return (
        <ul>
            {
                list.map((item) =>
                    <TaskItem  key={item.id} item={item} onRemoveItem={handleRemoveItem} />
                )
            }
        </ul>
    )
}

export default TaskList;