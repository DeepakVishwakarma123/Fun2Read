import StatsCard from "../components/StatsCard"

function CardContainer()
{
    return (

        <div className="bg-taupe-600 grid grid-cols-4 gap-2 p-2">
        <StatsCard/>
        <StatsCard/>
        <StatsCard/>
        <StatsCard/>
        </div>
    )
}

export default CardContainer