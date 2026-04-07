import { bookpathContext } from "../context/context"
import { useRef } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


const colors = [
  "bg-[#1E293B]",  // clearer slate contrast
  "bg-[#1F2A44]",  // bluish lift
  "bg-[#232946]",  // deep indigo (stands out nicely)
  "bg-[#2A2F4F]",  // subtle purple tone
  "bg-[#2C365E]",  // richer blue contrast
  "bg-[#1B3A4B]",  // teal-dark (good separation)
  "bg-[#2D3748]",  // gray-blue contrast
  "bg-[#2A2A40]",  // neutral dark but visible
  "bg-[#243447]",  // strong UI card color
  "bg-[#1C2B3A]"   // slightly brighter than base
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
            <button className="bg-[#6366F1] hover:bg-[#4f46e5] text-white px-4 cursor-pointer  rounded-lg"  onClick={renderCurrentPdf}>Read now </button>
        </div>
    )
}

export default DashBoardBookCover