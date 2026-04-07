        let arrayofans=[]
import { arrayuseranswerholdercontext, useranswercontext } from "../context/context"
import { useContext } from "react"

function QuizComponenet(
    {
        Question="Who is Narrotor of Novel ?",
        AnswerOption
    }
)
{
 let {userans,setans}=useContext(useranswercontext)
 

return (

    <div className=" text-white rounded-2xl p-4">
        <div className="text-xl font-semibold p-2">
            {Question}
        </div>
        {/* this blocks acts as Answer option to render */}
        <div className="bg-[#1E293B] grid grid-cols-2 gap-4 p-2">
            {/* here take array to iterate all answer option easily to map them here */}
            {/* for now this is just static when data's are there we adjust accordingly */}

            {
                AnswerOption.map( 

                (item) =>
                    {
                        return  <div onClick={
                          (e) => {
                            if(arrayofans.length!=5)
                            {
                                arrayofans.push(item[0])
                                console.log(arrayofans)
                                setans(arrayofans)
                                console.log(userans);
                                e.target.style="background-color:blue;"
                            }else{
                                console.log("the things are setting up!!")
                                arrayofans=[]
                            }
                          }
                        } className="flex  justify-between p-2 bg-[#172032] text-gray-400 font-medium shadow-olive-500">
                <p>{item}</p>
            </div>
                    } 
                )
            }        
        </div>
    </div> 
)
}

export default QuizComponenet

// this componet will render the question and answr by loopitn throough list simple or it acts as to render data