import BookCurrent from "../Features/BookCurrent"
import Timer from "../Features/Timer"
import PageTarget from "./PageTarget"

function TopRowReadinSession()
{

    return (
       <div className="flex bg-fuchsia-950 justify-between p-2">
        <BookCurrent/>
        <Timer/>
        <PageTarget/>
       </div>
    )
}

export default TopRowReadinSession