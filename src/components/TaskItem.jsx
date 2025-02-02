import { Square, Pencil, Trash2 } from "lucide-react";

const TaskItem = ({ item }) => {
    return (
        <li>
            <div className="flex items-baseline justify-around gap-4 py-3 px-5">
                <input type="checkbox" name="" id="" />

                <div className="grid grid-cols-1">
                    <h2>{item.title}</h2>

                    <div className="flex items-baseline gap-x-2 w-full text-xs">
                        <div className="flex items-baseline gap-1">
                            <Square className=" fill-green-500 w-2 h-2" />
                            <span>{item.status}</span>
                        </div>
                        <div>
                            <span>debut: </span>
                            <span>{item.start}</span>
                        </div>
                        <div>
                            <span>fin:</span>
                            <span>{item.end}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-2">
                    <Pencil />
                    <Trash2 className="text-red-500" />
                </div>
            </div>

            <hr />
        </li>
    )
}

export default TaskItem;