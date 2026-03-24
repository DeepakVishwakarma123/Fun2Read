import BookDetails from "./BookDetails"
import DashBoardBookCover from "./DashBoardBookCover"

function RecentBookDetailsContainer()
{   

return (
    <div className="grid grid-cols-6 bg-lime-600 p-2">
        {/* DashBoard Book Cover Component */}
        <DashBoardBookCover/>
        <BookDetails/>
    </div>
    )
}

export default RecentBookDetailsContainer