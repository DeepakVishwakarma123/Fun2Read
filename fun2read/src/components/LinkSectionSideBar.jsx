import RefLink from "../components/RefLinks"
import Icon from "../components/Icon"

function LinksSectionSideBar()
{
return (
    <div className="flex flex-col gap-8">
        <RefLink linkTitle={"Dasboard"} refereUrl={"/section/d"}>
           <Icon Iconsrc={"/public/Icon/dashboard.png"}/> 
        </RefLink>
           <RefLink linkTitle={"library"} refereUrl={"/section/b"}>
           <Icon Iconsrc={"/public/Icon/open-book.png"}/> 
        </RefLink>
         <RefLink linkTitle={"Session"} refereUrl={"/section/c"}>
           <Icon Iconsrc={"/public/Icon/read.png"}/> 
        </RefLink>
         <RefLink linkTitle={"Quiz History"} refereUrl={"/section/quiz"}>
           <Icon Iconsrc={"/public/Icon/ideas.png"}/> 
        </RefLink>
         <RefLink linkTitle={"Settings"} refereUrl={"/dashboard"}>
           <Icon Iconsrc={"/public/Icon/settings.png"}/> 
        </RefLink>
    </div>
)
}

export default LinksSectionSideBar