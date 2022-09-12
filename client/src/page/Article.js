import MainDetail from "../components/main/MainDetail";
import Footer from "../Template/Footer";
import Header from "../Template/Header";
import Main from "../Template/Main";

const Article = () => {
    return (
        <div className="App container">
            <Header />
            <Main page={<MainDetail />} />
            <Footer />
        </div>

    )
}
export default Article;