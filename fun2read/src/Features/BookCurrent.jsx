import { useContext } from "react"
import { booksContext } from "../context/context"
import { bookpathContext } from "../context/context"


function BookCurrent(
)
{   
    const {books,setbooks}=useContext(booksContext)
    let publicUrlfolder="Uploads/"
    const {bookpath,setpath}=useContext(bookpathContext)
    let updateCurrentpdf=(e) => {
        console.log(e.target.value)
        let fullurl=publicUrlfolder+e.target.value 
        setpath(fullurl)
    }
    return (
        <div className="flex p-2 bg-blue-800 text-black">
            <select id="" className="text-xl font-semibold" onChange={updateCurrentpdf}>
                   
               {
            books?books.map((item) => <option>{item["bookName"]}</option> ):<option>END Practical.pdf</option>
               }


            </select>
        </div>
    )
}

export default BookCurrent