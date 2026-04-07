import { useState } from "react";
import { arrayuseranswerholdercontext } from "./context";

let ArrayHolderProvider=(
    {
        children
    }
) => {
    const [arraynum,setarray]=useState(null)
    return <arrayuseranswerholdercontext.Provider value={[arraynum,setarray]}>
                {
                    children
                }
        </arrayuseranswerholdercontext.Provider>
}

export default ArrayHolderProvider