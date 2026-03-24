import RefLink from "./RefLinks"
import Icon from "./Icon"

function BottomLinkSideBar()
{
    return (
        <RefLink linkTitle={"Upgrade to pro"} refereUrl={"/"}>
        <Icon Iconsrc={"/public/Icon/laugh.png"}/> 
        </RefLink>
    )
}

export default BottomLinkSideBar