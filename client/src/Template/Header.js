import NavListerner from '../components/listerner/NavListener';
import img_logo from '../asset/logo_spotify.png';
import { MdHomeFilled } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {

  let nav = [
    {
      route: "/",
      name: 'Accueil',
      icon: <MdHomeFilled />
    },
    {
      route: "/search",
      name: 'Recherche',
      icon: <BiSearch />
    },
    // {
    //   route: "/bibliotheque",
    //   name: 'Bibliotheque',
    //   icon: icon_bib
    // }
  ]


  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={img_logo} alt="" />
        </Link>
      </div>
      <nav>
        <NavListerner element={nav} name={true} />
      </nav>
    </header >
  );
}
export default Header;