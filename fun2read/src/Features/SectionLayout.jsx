import FinalSectionSideBarLeftSide from "./FinalSectionSideBar"
import {Outlet} from "react-router-dom"

function SectionLayout()
{
 return (
    <>
    <FinalSectionSideBarLeftSide/>
    <div className="col-span-10">
        <Outlet/>
    </div>
    </>
 )
}

export default SectionLayout