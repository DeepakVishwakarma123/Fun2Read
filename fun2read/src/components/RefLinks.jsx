import { NavLink } from "react-router-dom"

function RefLink(
    {   
        linkTitle,
        refereUrl,
        children
    }
)
{
return <div>
       <NavLink to={refereUrl} className="flex">
        {children}
        {linkTitle}
       </NavLink>
       </div>
}


export default RefLink