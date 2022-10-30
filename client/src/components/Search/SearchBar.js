import React from 'react'
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
    return (
        // <div>
        <form>
            <div className="flex searchBox">
                <span className='search-icon'><BiSearch /></span>
                <input id="searchPut" type="text" placeholder="Artistes, titres ou Albums" />
            </div>
        </form>
        // </div>
    )
}

export default SearchBar