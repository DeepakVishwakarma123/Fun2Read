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
       <NavLink to={refereUrl} className={
        ({
            isActive
        }) => { return   isActive?"flex gap-2 p-2 font-semibold text-blue-400":"flex gap-2 p-2 font-semibold"
        }
        }>
        {children}
        {linkTitle}
       </NavLink>
       </div>
}


export default RefLink