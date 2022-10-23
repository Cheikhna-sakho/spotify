import { useNavigate } from "react-router-dom";
// import { CgHome } from "react-icons/cg";
const NavListerner = ({ element, className }) => {
    const navigate = useNavigate();
    return (
        <ul className={`nav-items ${className}`}>
            {element.map((e,i) =>
                <li key={i} className="flex elips nav-item" onClick={() => navigate(e.route)}>
                        <p>
                            {/* <CgHome/> */}
                            <img className="icon" src={e.icon} alt={e.name} />
                        </p>
                        <h3 className="elips">
                            {e.name}
                        </h3>
                </li>
            )}
        </ul>
    )
}
export default NavListerner;