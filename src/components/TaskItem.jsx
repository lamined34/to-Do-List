import { Square, Pencil, Trash2 } from "lucide-react";

const TaskItem = ({ item, onRemoveItem}) => {
    return (
        <li>
            <div className="flex items-baseline justify-between gap-4 py-6 md:py-10 px-5 shadow-lg 
            rounded-lg bg-white transition-all duration-200 ease-in-out hover:shadow-xl hover:translate-x-1
            hover:translate-y-0.5 hover:scale-105 max-sm:active:scale-110">
                <div className="flex items-start justify-start gap-6">
                    <input  type="checkbox" name="" id=""  className="min-h-7 min-w-7 mt-1"/>

                    <div className="grid grid-cols-1">
                        <h2  className={`capitalize text-2xl ${item.status == 'termine' && 'line-through'}`}>{item.title}</h2>

                        <div className="flex items-baseline gap-x-2 w-full text-xs italic">
                            <div className="flex items-baseline gap-1">
                                <Square className={item.status==='termine'? 'fill-green-500 w-2 h-2': 'fill-gray-300 w-2 h-2'} />
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

                <div className="flex gap-x-2.5 w-12">
                    <Pencil className="text-blue-500 
                    transition-all duration-300 ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:rotate-3" 
                    />
                    <Trash2 className="text-red-500 
                    transition-all duration-300 ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:rotate-3" 
                    onClick={() => onRemoveItem(item.id)} />
                </div>
            </div>

            <hr className="my-5 mx-20 text-gray-700"/>
        </li>
    )
}

export default TaskItem;