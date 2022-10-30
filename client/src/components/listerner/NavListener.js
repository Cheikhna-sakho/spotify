import { NavLink } from "react-router-dom";
// import { CgHome } from "react-icons/cg";
const NavListerner = ({ element, className }) => {
    return (
        <ul className={`nav-items ${className}`}>
            {element.map((e, i) =>
                <NavLink to={e.route}>
                    <li key={i} className="flex elips nav-item">
                        <p className="nav-icon">
                            {e.icon}
                        </p>
                        <span className="elips">
                            {e.name}
                        </span>
                    </li>
                </NavLink>
            )}
        </ul>
    )
}
export default NavListerner;