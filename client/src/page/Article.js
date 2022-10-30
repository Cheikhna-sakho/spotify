import MainDetail from "../components/Details/AlbumDetail";
import Page from "../components/pageModel/Page";


const Article = () => {
    return (
        <Page addClass={"detail-page"} headerClass={"detail-top"}>
            <MainDetail />
        </Page>

    )
}
export default Article;