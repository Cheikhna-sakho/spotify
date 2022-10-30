import Page from "../components/pageModel/Page";
import Mainsearch from "../components/contents/Mainsearch";
import SearchBar from "../components/Search/SearchBar";

const Search = () => {
    return (
        <Page addClass={"search-page"} headerClass="search-top" headerContent={<SearchBar/>}>
            <Mainsearch/>
        </Page>
    );
}
export default Search;
