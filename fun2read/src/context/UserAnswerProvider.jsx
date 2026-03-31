import { useranswercontext } from "./context";
import { useState } from "react";

let UserAnswerProvider=(
    {
        children
    }
) => {
    const [userans,setans]=useState([])
    return <useranswercontext.Provider value={{userans,setans}}>
        {
            children
        }
    </useranswercontext.Provider>
}

export default UserAnswerProvider