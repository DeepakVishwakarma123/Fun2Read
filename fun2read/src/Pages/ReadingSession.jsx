import TopRowReadinSession from "../components/TopRowReadingSession"
import MyPDFViewer from "../Features/PdfViewer"
import Button from "../components/Button"
import {Link} from "react-router-dom"
import FetchApiGet from "../Hooks/FetchApiGet.js"
import FetchApiPost from "../Hooks/FetchApiPost.js"
import { useContext, useState } from "react"
import { pagenumbercontext } from "../context/context.js"
import { bookpathContext } from "../context/context.js"
import { currentbookpathcontext } from "../context/context.js"
import { questioinanswercontext } from "../context/context.js"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader.jsx"

function ReadingSession()
{          
  let naviagte=useNavigate() 
  let {qna,setqna}=useContext(questioinanswercontext)
  let {renderpdfurl,seturl}=useContext(currentbookpathcontext)  
  let {bookpath,setpath}=useContext(bookpathContext)  
  let {pagerange,setrange}=useContext(pagenumbercontext)
  let [start,setstart]=useState()
  let [end,setend]=useState()
  let [loading,setloading]=useState(false)
  let [issue,setissue]=useState(null)

  let bodyobject={
    folder:renderpdfurl,
    startpage:pagerange[0],
    endpage:pagerange[1]
  }
     async function GetQuestionAnswer() {
        setloading(true)
        FetchApiPost(`http://localhost:4002/api/v1/quiz/ai`,bodyobject).then(
            (res) => {
              if(res["status"]==201 || res["status"]==200)
              {
                console.log(res)
                console.log(res["data"]["data"]["data"])
                setqna(res["data"]["data"]["data"])
                setloading(false)
                setissue(null)
                naviagte("/section/quiz")
              }
              if(res["status"]>=400)
              { 
                console.log(res)
                setloading(false)
                setissue(res["data"]["message"])
              }
            }
        ).catch((err) => console.log(err))
      }
      return (
           <div className="bg-[#0B1326] h-full grid gap-2">
            <TopRowReadinSession/>
            <MyPDFViewer/>
            {/* make some sense with a use params to solve below problem */}
            <div className="flex items-center gap-8 p-2">
            <button className="bg-[#22C55E] text-2xl text-black p-2 font-semibold" onClick={GetQuestionAnswer} >
              
              {
                loading?<Loader/>:"i have done reading"
              }
              
              </button>
            <label className="text-white font-semibold">Enter Start Page Number</label>
            <input className="bg-gray-300 font-semibold" placeholder="Start Page Number" type="number" onChange={(e) => setstart(e.target.value) } />
            <label className="text-white font-semibold">Enter End Page Number</label>
            <input className="bg-gray-300 font-semibold" placeholder="End Page Number" type="number" name="" id="" onChange={(e) => setend(e.target.value) } />
            <button className="text-black font-semibold p-1 flex justify-center items-center bg-[#22c55e]" onClick={
                () => {
                 //update state here
                 if(start!="" && end!="")
                 {
                    let pagerangdata=[start,end]
                    console.log("page reange data ",pagerangdata);
                    
                    setrange(pagerangdata)
                 }
                }
            }>
                change page details
            </button>
            </div>
            {
              issue && <p className="text-red-400 font-semibold animate-pulse text-2xl">
                 {
                  issue
                 }
              </p>
            }
           </div>
    )
}

export default ReadingSession