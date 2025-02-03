const CountCard = ({title, Icon, count}) => {
    return (
        <>
            <div className="flex justify-between py-6 px-2 md:px-3 items-end shadow-md rounded-md
            transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-y-105 hover:scale-x-110">
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-800 font-bold">{title}</span>
                    <Icon />
                </div>

                <div>
                    <span className="text-4xl md:text-5xl">{count}</span>
                </div>
            </div>
        </>
    )
}

export default CountCard