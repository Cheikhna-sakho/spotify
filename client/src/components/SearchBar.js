const SearchBar = () => {

    return (
        <form>
            {/* <p>SearchBar</p> */}
            <div className="flex searchBox"> 
                <p><img className="icon" src="https://img.icons8.com/nolan/64/search-more.png" alt="log_search" /></p> 
                <p><input id="searchPut" type="text" placeholder="Artistes, titres ou Albums"/></p> 
            </div>
        </form>
    )
}
export default SearchBar;