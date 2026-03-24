import TopRowDashboard from "../components/topRowDashboard"
import RecentBookDashBoard from "../Features/RecentBookDashBoard"

function FinalDashBoard()
{
    return (
      <div className="bg-orange-950 h-full">
       <TopRowDashboard/>
       <RecentBookDashBoard/>
       {/* the above second componetn holds many components */}
    </div>
    )
}

export default FinalDashBoard