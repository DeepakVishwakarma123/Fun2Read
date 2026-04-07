import Button from "../components/Button"
import QuizComponenet from "../components/QuizComponent"
import { arrayuseranswerholdercontext, questioinanswercontext, useranswercontext } from "../context/context"
import { useContext, useState } from "react"
import FetchApiPost from "../Hooks/FetchApiPost"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader.jsx"


function QuizPage()
{
    let {qna,setqna}=useContext(questioinanswercontext)
    let {userans,setans}=useContext(useranswercontext)
    let [score,setscore]=useState(0)
    let [loading,setloading]=useState(false)
    let [issue,setissue]=useState(null)
    let navigate=useNavigate()
    console.log("qna",qna)

return (

    
    <div className="bg-[#0F172A] grid">
        {   
           qna?qna["questions"].map(
                (item) => {
                    return <QuizComponenet Question={item["question"]} AnswerOption={item["options"]}/>
                }
            ):<p className="text-2xl text-white">please visit the reading session page and start quiz from there</p>
        }
        <div className="grid grid-cols-2 gap-2 p-2">
        <button
        className="bg-[#6366F1] cursor-pointer font-semibold  text-white p-1"
        onClick={() => {
            console.log("test22222222222222",userans);
            
            if(userans.length===qna["questions"].length)
            {
                //doing the api call 
                FetchApiPost(`http://localhost:4002/api/v1/quiz/submit`,{userans:userans,quizid:qna["quizid"]}).then(
                    (res) => {
                        setloading(true)
                        if(res["status"]===200 || res["status"]===201)
                        {
                            console.log(res)
                            setloading(false)
                            setissue(null)
                            setscore(res["data"]["score"])
                            alert("your respons recoreded feel free to close this page")
                            alert("you can again able to give this test with new options just play with them")
                        }
                        if(res["status"]>=400)
                        {
                            setissue(res["data"]["message"])
                        }
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                    }
                )
            }
            else{
                alert("please again give test or try different session")
            }
        }}
        >  
        {

            loading?<Loader/>:"Submit Quiz"
        }
            </button>
        {/* <Button type={"button"} buttonText={"Submit Quiz"}/> */}
        <button  onClick={() => {console.log("test")
            navigate("/section/b")
        }} className="bg-blue-500 text-white font-semibold">Give Test Again</button>
        </div>
            {
                issue && <p className="animate-pulse text-2xl text-red-500 font-semibold">
                    {
                        issue
                    }
                </p>
            }
        <div className="animate-pulse">
        <p className="text-lime-300 font-semibold text-2xl">Out of 5</p>
        <p className="text-lime-300 font-semibold text-2xl"> the score is {score}</p>
        </div>

    </div>
)
}


export default QuizPage