import AllSideBarLinks from "../components/AllSideBarLinks"
import Icon from "../components/Icon"

function FinalSectionSideBarLeftSide()
{
    return (
           <div className="col-span-2 bg-[#0F172A] flex  flex-col p-4 gap-8">
               <div className="text-2xl font-semibold text-white flex  gap-2 items-center">
                Fun2Read
               </div>
               <AllSideBarLinks/>
           </div>
    )
}

export default FinalSectionSideBarLeftSide