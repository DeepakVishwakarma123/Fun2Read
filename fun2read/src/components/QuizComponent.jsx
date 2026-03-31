        let arrayofans=[]
import { useranswercontext } from "../context/context"
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

    <div className="bg-black text-white rounded-2xl p-4">
        <div className="text-xl font-semibold">
            {Question}
        </div>
        {/* this blocks acts as Answer option to render */}
        <div className="bg-blue-700 grid grid-cols-2 gap-4 p-2">
            {/* here take array to iterate all answer option easily to map them here */}
            {/* for now this is just static when data's are there we adjust accordingly */}

            {
                AnswerOption.map( 

                (item) =>
                    {
                        return  <div onClick={
                          () => {
                        
                            arrayofans.push(item)
                            console.log(arrayofans)
                            setans(arrayofans)
                            console.log(userans);
                            
                          }
                        } className="flex  justify-between p-2 bg-teal-700 text-lime-300 font-medium shadow-olive-500">
                <p>{item}</p>
                <img src="/Icon/rise.png" width={"30px"} alt="" />
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