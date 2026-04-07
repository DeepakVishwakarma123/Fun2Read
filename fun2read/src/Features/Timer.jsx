import { useEffect, useState } from "react"
import { useRef } from "react";



function Timer()
{      
    
     const [selectTime,setCustomTime]=useState(5)
     const [seconds,setseconds]=useState("00")
     const [timerun,settimerun]=useState(false)

     useEffect(
        () => {
           let id;
           if(timerun)
           {
           let intervalid=setInterval(() => {
           if(selectTime===1)
           {
            setCustomTime(0)
            setseconds(59)
           }
           if(selectTime===10)
           {
            setCustomTime(9)
           }
           if(seconds===1 && selectTime===0)
           {
            console.log("stop it now")
            clearInterval(intervalid)
            settimerun((prev) => !prev)
           }
           if(typeof(seconds)!="string")
            {
                
                setseconds((prev) => prev-1)
           }
           if(seconds===1 && selectTime>1)
           {
            setseconds(59)
            setCustomTime((prev) => prev-1)
           }
           if(selectTime===5)
           {
            setCustomTime(4)
            setseconds(59)
           }
        }, 1000);
        id=intervalid
    }

        return () => {
            clearInterval(id)
        }

        },[timerun,seconds,selectTime]
     )
     return (
        <div className="bg-[#373c53] flex gap-8 p-2">
            <p className="bg-[#131B2E] uppercase text-white font-semibold tracking-wide flex justify-center items-center">
            Timer:
            </p>
            {/* time optins to be choosed */}
            <div className="bg-orange-400 flex">
                <button
                onClick={() => {
                    setCustomTime(1)
                }} 
                className="p-4 bg-gray-500 font-semibold text-teal-300 flex justify-center items-center">
                1m</button>
             <button
                onClick={() => {
                    setCustomTime(5)
                }} 
                className="p-4 bg-gray-500 font-semibold text-teal-300 flex justify-center items-center">
                5m</button>
                 <button
                onClick={() => {
                    setCustomTime(10)
                }} 
                className="p-4 bg-gray-500 font-semibold text-teal-300 flex justify-center items-center">
                10m</button>
            </div>
            {/* time which moves */}
            <div  className="text-white text-2xl font-semibold bg-[#21293b] flex justify-center items-center">
                {
                    selectTime
                }
                :
                {
                    seconds
                }
            </div>
            <button onClick={() =>   
                {  
                    console.log("clicked button");
                    
                    settimerun(true)

                }
                } className="bg-blue-700 text-white font-semibold">
                Start Session
            </button>
             <button onClick={() =>   
                {  
                    console.log("clicked button");
                    
                    settimerun(false)

                }
                } className="bg-blue-700 text-white font-semibold">
                Pause Session
            </button>
        </div>
    )
}

export default Timer