import FinalSectionSideBarLeftSide from "./FinalSectionSideBar"
import {Outlet} from "react-router-dom"

function SectionLayout()
{
 return (
    <>
    <FinalSectionSideBarLeftSide/>
    <div>
        <Outlet/>
    </div>
    </>
 )
}

export default SectionLayout