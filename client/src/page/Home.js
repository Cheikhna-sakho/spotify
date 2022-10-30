import MainHome from "../components/contents/MainHome";
import Page from "../components/pageModel/Page";

const Home = () => {
    return (
        <Page addClass={"home-page"} headerClass="home-top">
            <MainHome />
        </Page>
    );
}
export default Home;
