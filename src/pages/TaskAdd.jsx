import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"
import { useCallbackContext } from "./CallbackContext"

const TaskAdd = () => {
    const { callback } = useCallbackContext();

    const { register, handleSubmit } = useForm()

    return (
        <>
            <div className="bg-white w-full max-w-lg p-5 space-y-7">
                <h1 className="text-4xl text-gray-700">Nouvelle Tâche</h1>

                <form onSubmit={handleSubmit(callback)}>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="title">Nom</label>
                            <input type="text" id="title" {...register('title')} className="border-b mx-5" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" {...register('description')} className="border mx-5" />
                        </div>

                        <div className="flex gap-2">
                            <button>Annuler</button>
                            <button type="submit" onClick={() => console.log('hello')}>Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskAdd