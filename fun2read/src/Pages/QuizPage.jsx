import Button from "../components/Button"
import QuizComponenet from "../components/QuizComponent"
import { questioinanswercontext, useranswercontext } from "../context/context"
import { useContext } from "react"
import FetchApiPost from "../Hooks/FetchApiPost"

function QuizPage()
{
    let {qna,setqna}=useContext(questioinanswercontext)
    let {userans,setans}=useContext(useranswercontext)
    console.log("qna",qna)
return (
    <div className="bg-black grid">
        {
            qna.map(
                (item) => {
                    return <QuizComponenet Question={item["question"]} AnswerOption={item["options"]}/>
                }
            )
        }
        <div className="grid grid-cols-2 gap-2 p-2 bg-lime-400">
        <button
        onClick={() => {
            console.log("test22222222222222",userans);
            
            if(userans.length===qna.length)
            {
                //doing the api call 
                FetchApiPost(`http://localhost:4002/submitans`,{userans:userans}).then(
                    (res) => {
                        if(res["status"]===200 || res["status"]===201)
                        {
                            console.log(res)
                            alert("your respons recoreded feel free to close this page")
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
        >Submit Quiz</button>
        {/* <Button type={"button"} buttonText={"Submit Quiz"}/> */}
        <Button type={"button"} buttonText={"Give Test Again"}/>
        </div>
    </div>
)
}


export default QuizPage