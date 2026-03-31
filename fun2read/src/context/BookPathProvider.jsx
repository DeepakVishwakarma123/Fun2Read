import { bookpathContext } from "./context";
import { use, useState } from "react";

const BookpathProvider=(
    {
        children
    }
) => {
const [bookpath,setpath]=useState("Uploads/END Practical.pdf")
return <bookpathContext.Provider value={{bookpath,setpath}}>
    {children}
</bookpathContext.Provider>
}

export default BookpathProvider