import BookCurrent from "../Features/BookCurrent"
import Timer from "../Features/Timer"
import PageTarget from "./PageTarget"
import { pagenumbercontext } from "../context/context"
import { useContext } from "react"


function TopRowReadinSession()
{
 let {pagerange,setrange}=useContext(pagenumbercontext)
 console.log(pagerange)
    return (
       <div className="flex bg-fuchsia-950 justify-between p-2">
        <BookCurrent/>
        <Timer/>
        <PageTarget startPage={pagerange[0]} endPage={pagerange[1]}/>
       </div>
    )
}

export default TopRowReadinSession