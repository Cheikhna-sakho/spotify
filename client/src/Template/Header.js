import NavListerner from '../components/listerner/NavListener';
import img_logo from '../asset/logo_spotify.png';
const Header = () => {
  const icon_home = "https://img.icons8.com/nolan/64/home.png";
  const icon_search = "https://img.icons8.com/nolan/64/google-web-search.png";
  const icon_bib = "https://img.icons8.com/nolan/64/music-library.png";
  // const icon_playlist = "https://img.icons8.com/nolan/64/add.png";
  // const icon_like = "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-like-music-kiranshastry-gradient-kiranshastry.png";
  let nav = [
    {
      route: "/",
      name: 'Acceuil',
      icon: icon_home
    },
    // {
    //   route: "/recherche",
    //   name: 'Recherche',
    //   icon: icon_search
    // },
    // {
    //   route: "/bibliotheque",
    //   name: 'Bibliotheque',
    //   icon: icon_bib
    // }
  ]


  return (
    <header>
      <div className="logo"><img src={img_logo} alt="" /></div>
      <nav>
        <NavListerner element={nav} name={true} />
      </nav>
    </header>
  );
}
export default Header;