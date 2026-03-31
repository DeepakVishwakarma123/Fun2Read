import { pagenumbercontext } from "./context"
import { useState } from "react"

const PageRangeProvider=({children}) => {
    const [pagerange,setrange]=useState([1,10])
    return <pagenumbercontext.Provider value={{pagerange,setrange}}>
        {children}
    </pagenumbercontext.Provider>
}

export default PageRangeProvider