import Button from "../components/Button"


function StatusButtonLibraryContainer() {
    return (
        <div className="flex gap-2 p-2 bg-lime-400">
        <Button buttonText={"All"} type={"button"}/>
        <Button buttonText={"In Progress"} type={"button"}/>
        <Button buttonText={"Completed"} type={"button"}/>
        </div>
    )
}

export default StatusButtonLibraryContainer