import NavListerner from '../components/listerner/NavListener';
import Listerner from "../components/listerner/Listerner";
import img_logo from '../asset/logo_spotify.png';
const Header = () => {
  const icon_home = "https://img.icons8.com/nolan/64/home.png";
  const icon_search = "https://img.icons8.com/nolan/64/google-web-search.png";
  const icon_bib = "https://img.icons8.com/nolan/64/music-library.png";
  const icon_playlist = "https://img.icons8.com/nolan/64/add.png";
  const icon_like = "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-like-music-kiranshastry-gradient-kiranshastry.png";
  let nav = [
    {
      name: 'Acceuil',
      icon: icon_home
    },
    {
      name: 'Recherche',
      icon: icon_search
    },
    {
      name: 'Bibliotheque',
      icon: icon_bib
    }
  ]
  let more = [
    {
      name: 'Creer une playlist',
      icon: icon_playlist
    },
    {
      name: 'Titres liké',
      icon: icon_like
    }
  ]
  // console.log(nav);
  return (
    <header>
      <div className="logo"><img src={img_logo} alt="" /></div>
      <nav>
        <NavListerner element={nav} name={true} />
        {/* <Listerner element={//} name={true} navList={true} /> */}
      </nav>
      <Listerner className='more' element={more} name={true} />
    </header>
  );
}
export default Header;