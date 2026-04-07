import { useState } from "react"
import { Link } from "react-router-dom"

function Logout()
{   
    const [data,setdata]=useState(null)
    let logout=async () => {
        try {
        let response=await  fetch(`http://localhost:4002/api/v1/auth/logout`,{
            method:"POST",
            credentials:"include"
        })
        let data=await response.json() 
        console.log(data) 
        setdata(data["message"]) 
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
        <div className="bg-black text-white h-full flex flex-col gap-2 justify-center items-center">
        <button onClick={logout} className="bg-orange-700 text-6xl font-semibold p-2 animate-pulse cursor-pointer">
            Logout
        </button>
        {
            data && <p className="text-orange-600 font-semibold text-3xl animate-bounce">{data}</p>
        }
        {
            data && <p><Link to="/fun2read/login">visit login page</Link></p>
        }
        </div>
        </>
    )
}

export default Logout