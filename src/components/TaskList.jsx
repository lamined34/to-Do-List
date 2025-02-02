import TaskItem from "./TaskItem";


const TaskList = ({list}) => {
    return (
        <ul>
            {
                list.map((item) =>
                    <TaskItem  key={item.id} item={item} />
                )
            }
        </ul>
    )
}

export default TaskList;