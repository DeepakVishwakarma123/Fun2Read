import BookSuggestionTagline from "../components/BookSuggestionTagline"
import DashBoardTopHeading from "../components/DashBoardTopHeading"
import CardContainer from "./CardContainer"
import ContinueReadingStatic from "../components/ContinueReading"
import RecentBookDetailsContainer from "./RecentBookDetailsContainer"
import AiInsight from "../components/AiInsight"
function RecentBookDashBoard()
{
    return (
<div className="bg-teal-950 p-4">
    <DashBoardTopHeading/>
    <BookSuggestionTagline/>
    <CardContainer/>
    <ContinueReadingStatic/>
    <RecentBookDetailsContainer/>
    <AiInsight/>
</div>
    )
}

export default RecentBookDashBoard

// this will acts as main container for holding all rows 