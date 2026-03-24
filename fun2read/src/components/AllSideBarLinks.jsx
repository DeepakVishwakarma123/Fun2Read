import LinksSectionSideBar from "./LinkSectionSideBar"
import BottomLinkSideBar from "./BottomLinkSideBar"

function AllSideBarLinks()
{
return (
    <div className="flex flex-col justify-between bg-purple-950 h-full">
        <LinksSectionSideBar/>
        <BottomLinkSideBar/>
    </div>
)
}

export default AllSideBarLinks