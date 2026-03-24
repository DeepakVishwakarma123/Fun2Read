import TopRowLibrary from "../Features/TopRowLibrary"
import LibraryMainContainer from "../Features/LibraryMainContainer"

function MyLibrary()
{
    return (
        <div className="bg-orange-950 h-full">
            <TopRowLibrary/>
            <LibraryMainContainer/>
        </div>
    )
}

export default MyLibrary