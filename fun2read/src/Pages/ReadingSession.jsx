import TopRowReadinSession from "../components/TopRowReadingSession"
import MyPDFViewer from "../Features/PdfViewer"
import Button from "../components/Button"
import {Link} from "react-router-dom"

function ReadingSession()
{
    return (
           <div className="bg-orange-950 h-full">
            <TopRowReadinSession/>
            <MyPDFViewer/>
            {/* make some sense with a use params to solve below problem */}
            <Link to={"/section/quiz"}>I have read start a quiz</Link>
           </div>
    )
}

export default ReadingSession