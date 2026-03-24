function StatsCard(
    {
        cardTitle="Reading Streak",
        StatData="12 Days",
        StatNumber="2%"
    }
)
{
    return (
    <div className="p-4 rounded-xl  bg-teal-800">
    {/* title goes here of stats cards */}
    <p className="uppercase font-medium text-gray-500">{cardTitle}</p>
    {/* data and percentage container */}
    <div className="flex justify-between">
        <p className="text-2xl font-semibold text-white">{StatData}</p>
        {/* graph increasign percentage */}
        <div className="flex justify-center items-center">
        <img src="/public/Icon/rise.png" className="hue-rotate-60"  alt="rise icon here" width={"20px"} />
        <p>{StatNumber}</p>
        </div>
       </div>
       </div>
    )
}

export default StatsCard