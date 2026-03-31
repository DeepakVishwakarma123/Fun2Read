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

function ReadingSession()
{          
  let naviagte=useNavigate() 
  let {qna,setqna}=useContext(questioinanswercontext)
  let {renderpdfurl,seturl}=useContext(currentbookpathcontext)  
  let {bookpath,setpath}=useContext(bookpathContext)  
  let {pagerange,setrange}=useContext(pagenumbercontext)
  let [start,setstart]=useState()
  let [end,setend]=useState()

  let bodyobject={
    folder:renderpdfurl,
    startpage:pagerange[0],
    endpage:pagerange[1]
  }
     async function GetQuestionAnswer() {
        FetchApiPost(`http://localhost:4002/api/v1/quiz/ai`,bodyobject).then(
            (res) => {
              if(res["status"]==201 || res["status"]==200)
              {
                console.log(res["data"]["data"]["data"]["questions"])
                setqna(res["data"]["data"]["data"]["questions"])
                naviagte("/section/quiz")
              }
            }
        ).catch((err) => console.log(err))
      }
      return (
           <div className="bg-orange-950 h-full">
            <TopRowReadinSession/>
            <MyPDFViewer/>
            {/* make some sense with a use params to solve below problem */}
            <button className="bg-amber-400 text-2xl p-2" onClick={GetQuestionAnswer} >i have done reading</button>
            <label className="text-white">enter start page number</label>
            <input className="bg-purple-500" type="number" onChange={(e) => setstart(e.target.value) } />
            <label className="text-white">enter end page number</label>
            <input className="bg-purple-600" type="number" name="" id="" onChange={(e) => setend(e.target.value) } />
            <button className="text-white bg-red-400" onClick={
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
    )
}

export default ReadingSession