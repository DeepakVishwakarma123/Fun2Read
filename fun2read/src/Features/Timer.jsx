function Timer()
{
    return (
        <div className="bg-amber-800 flex gap-8">
            <p className="uppercase text-orange-500 font-semibold tracking-wide flex justify-center items-center">
            Timer:
            </p>
            {/* time optins to be choosed */}
            <div className="bg-orange-400 flex">
                <button className="p-4 bg-gray-500 font-semibold text-teal-300 flex justify-center items-center">15m</button>
                <button className="p-4 bg-gray-500 font-semibold text-teal-400 flex justify-center items-center">30m</button>
                <button className="p-4 bg-gray-500 font-semibold text-teal-300 flex justify-center items-center">45m</button>
                <button className="p-4 bg-gray-500 font-semibold text-teal-300 flex justify-center items-center">60m</button>
            </div>
            {/* time which moves */}
            <div className="text-red-700 bg-purple-800 flex justify-center items-center">
                45:00
            </div>
            <button className="bg-blue-700 text-white font-semibold">
                Start Session
            </button>
        </div>
    )
}

export default Timer