import { bookpathContext } from "../context/context"
import { useRef } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


const colors = [
  "bg-indigo-600", "bg-teal-600", "bg-rose-600", 
  "bg-amber-600", "bg-purple-600", "bg-emerald-600"
]




function DashBoardBookCover({
    bookname="  ",
    bookurl
})
{    const navigate=useNavigate()
     const {bookpath,setpath}=useContext(bookpathContext)
    const hiddenUrlfield=useRef(null)
    const randomColor = colors[bookname.length % colors.length]
    const renderCurrentPdf=() => {
        console.log(bookurl);
        setpath(bookurl)
        navigate("/section/c")
    }
    return (
        <div className={`col-span-2 ${randomColor} w-full h-32 flex flex-col items-center justify-center rounded-lg`}>
            <span className="text-white text-4xl font-bold">
                {

                    bookname[0].toUpperCase()
                }
            </span>
            <button onClick={renderCurrentPdf}>Read now
            </button>
        </div>
    )
}

export default DashBoardBookCover