import DashBoardBookCover from "./DashBoardBookCover"

function UploadedBooks()
{
    return (
        <div className="grid  grid-cols-4 gap-2 bg-lime-600 p-2">
            <DashBoardBookCover/>
            <DashBoardBookCover/>
            <DashBoardBookCover/>
        </div>
    )
}

export default UploadedBooks