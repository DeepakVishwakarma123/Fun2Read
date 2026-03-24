import FirstRow from "../components/FirstRowRecentBookDetails"
import Second_Row from "../components/SecondRowRecentBooks"
import ThirdRow from "../components/ThirdRowRecentBooks"
import FourthRow from "../components/FourthRowRecentBooks"

function BookDetails()
{
    return (
        <div className="bg-amber-950 col-span-4 grid p-2">
            <FirstRow/>
            <Second_Row/>
            <ThirdRow/>
            <FourthRow/>
        </div>
    )
}

export default BookDetails

// this will we use for recent book details as a container