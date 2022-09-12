import { NavLink } from "react-router-dom";
const NavListerner = ({ element, className}) => {
    return (
        <ul className={className}>
            {element.map(e =>                
                <NavLink key={e.name} to={`/${e.name.toLowerCase()}`}>
                    <li  className="flex elips"> <p><img className="icon" src={e.icon} alt={e.name} /></p> <h3 className="elips">{e.name}</h3></li>
                </NavLink>
            )}
        </ul>
    )
}
export default NavListerner;