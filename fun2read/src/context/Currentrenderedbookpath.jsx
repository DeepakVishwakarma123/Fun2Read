import { useState } from "react";
import { currentbookpathcontext } from "./context";

let CurrerntRenderedBookurl=(
    {
        children
    }
) => {
    let [renderpdfurl,seturl]=useState()
    return <currentbookpathcontext.Provider value={{renderpdfurl,seturl}}>
        {children}
    </currentbookpathcontext.Provider>
}

export default CurrerntRenderedBookurl