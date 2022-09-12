// import RenderAlbum from "../components/RenderAlbum";

import MainHome from "../components/main/MainHome";
import Footer from "../Template/Footer";
import Header from "../Template/Header";
import Main from "../Template/Main";
// import Layout from "../Template/Layout";
// import Main from "../Template/Main";
const Acceuil = () => {
    return (
        <div className="App container">
            <Header />
            <Main page={<MainHome />} />  
            <Footer />
        </div>
    );
}
export default Acceuil;
