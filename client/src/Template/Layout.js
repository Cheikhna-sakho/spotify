import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
// import Main from "./Main";


const Layout = ({ children }) => {
    return (
        <div className="App container">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;