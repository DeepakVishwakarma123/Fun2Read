import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function DashBoard()
{   
    const responseData=useLoaderData()
    useEffect(
        () => {
            console.log("the response data is something",responseData)
        },[]
    )
    return (
        <div className="bg-purple-900 text-blue-600">
        </div>
    )
}


export default DashBoard