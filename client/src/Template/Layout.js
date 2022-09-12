import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
// import Main from "./Main";


const Layout = ({ main, bar }) => {
    <div className="App container">
        <Header />
        <Main page={main}/>
        {/* {main} */}
        <Footer />
    </div>
}
export default Layout;