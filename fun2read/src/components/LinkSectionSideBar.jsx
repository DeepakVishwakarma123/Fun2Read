import RefLink from "../components/RefLinks"
import Icon from "../components/Icon"

function LinksSectionSideBar()
{
return (
    <div className="flex flex-col gap-8">
           <RefLink linkTitle={"library"} refereUrl={"/section/b"}>
           <Icon Iconsrc={"/public/Icon/open-book.png"}/> 
        </RefLink>
         <RefLink linkTitle={"Session"} refereUrl={"/section/c"}>
           <Icon Iconsrc={"/public/Icon/read.png"}/> 
        </RefLink>
         <RefLink linkTitle={"Quizes"} refereUrl={"/section/quiz"}>
           <Icon Iconsrc={"/public/Icon/ideas.png"}/> 
        </RefLink>
           <RefLink linkTitle={"History"} refereUrl={"/section/history"}>
           <Icon Iconsrc={"/public/Icon/thunderbolt.png"}/> 
        </RefLink>
         <RefLink linkTitle={"Settings"} refereUrl={"/section/settings"}>
           <Icon Iconsrc={"/public/Icon/settings.png"}/> 
        </RefLink>
    </div>
)
}

export default LinksSectionSideBar