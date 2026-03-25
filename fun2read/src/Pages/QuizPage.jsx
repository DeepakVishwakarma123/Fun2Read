import Button from "../components/Button"
import QuizComponenet from "../components/QuizComponent"

function QuizPage()
{
return (
    <div className="bg-black grid">
        <QuizComponenet/>
        <QuizComponenet/>
        <QuizComponenet/>
        <QuizComponenet/>
        <div className="grid grid-cols-2 gap-2 p-2 bg-lime-400">
        <Button type={"button"} buttonText={"Submit Quiz"}/>
        <Button type={"button"} buttonText={"Give Test Again"}/>
        </div>
    </div>
)
}


export default QuizPage