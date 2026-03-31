import { questioinanswercontext } from "./context";
import { useState } from "react";

let QuesionanswerProvider=(
    {
        children
    }
) => {
    const [qna,setqna]=useState("")
    return<questioinanswercontext.Provider value={{qna,setqna}}>
{children}
    </questioinanswercontext.Provider>
}

export default QuesionanswerProvider