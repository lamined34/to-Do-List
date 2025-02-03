import { useForm } from "react-hook-form"

const TaskAdd = ({onSubmitTask}) => {
    const { register, handleSubmit } = useForm()


    return (
        <>
            <div className="bg-white w-full max-w-lg p-5 space-y-7 pt-5">
                <h1 className="text-4xl text-gray-800 mb-28 font-bold">Nouvelle Tâche</h1>

                <form onSubmit={handleSubmit(onSubmitTask)}>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="title" className="text-xl text-gray-800 italic font-semibold">Nom</label>
                            <input type="text" id="title" {...register('title')} className="border-b-2 outline-0 mx-6 px-0.5 border-gray-500" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="description" className="text-xl text-gray-800 italic font-semibold">Description</label>
                            <textarea id="description" {...register('description')} className="border-2 outline-0 mx-6 px-0.5 rounded-md h-36 border-gray-500" />
                        </div>

                        <div className="flex justify-end mr-6 gap-6">
                            <button type="button" className="outline-1 px-5 py-2.5 rounded-md outline-red-500 text-sm font-semibold 
                            transition duration-300 ease-in-out hover:scale-x-110 hover:bg-red-500 hover:text-white
                            hover:scale-y-105 active:scale-90 active:bg-red-500 active:text-white">
                                Annuler
                            </button>
                            <button type="submit" className="outline-1 px-5 py-2.5 rounded-md outline-blue-500 text-sm font-semibold 
                            transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-x-110 
                            hover:scale-y-105 active:scale-90 active:bg-blue-500 active:text-white">
                                Ajouter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskAdd