import { Square, Pencil, Trash2 } from "lucide-react";

const TaskItem = ({ item, onRemoveItem}) => {
    return (
        <li>
            <div className="flex items-baseline justify-between gap-4 py-3 px-5">
                <div className="flex items-baseline justify-start gap-6">
                    <input type="checkbox" name="" id="" />

                    <div className="grid grid-cols-1">
                        <h2 className="capitalize">{item.title}</h2>

                        <div className="flex items-baseline gap-x-2 w-full text-xs">
                            <div className="flex items-baseline gap-1">
                                <Square className=" fill-green-500 w-2 h-2" />
                                <span >{item.status}</span>
                            </div>
                            <div>
                                <span>debut: </span>
                                <span>{item.start}</span>
                            </div>
                            {
                                item.end && (
                                    <div>
                                        <span>fin:</span>
                                        <span>{item.end}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-2 ">
                    <Pencil />
                    <Trash2 className="text-red-500" onClick={() => onRemoveItem(item.id)} />
                </div>
            </div>

            <hr />
        </li>
    )
}

export default TaskItem;