import { booksContext } from "./context"
import { useState } from "react"

const BooksProvider=({children}) => {
    const [books,setbook]=useState()
    return <booksContext.Provider value={{books,setbook}}>
        {children}
    </booksContext.Provider>
}

export default BooksProvider