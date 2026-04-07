import DashBoardBookCover from "./DashBoardBookCover"
import { booksContext } from "../context/context"
import { useContext } from "react"
import Loader from "../components/Loader"

function UploadedBooks()
{   
    let {books,setbook}=useContext(booksContext)
    console.log(books)
    return (
        <div className="grid  grid-cols-4 gap-2 bg-[#0F172A] p-2">
            {
                books?books.map((item,index) => <DashBoardBookCover key={index} bookname={item["bookName"]} bookurl={item["bookurl"]}/> ):"data is loading now"
            }
        </div>
    )
}

export default UploadedBooks