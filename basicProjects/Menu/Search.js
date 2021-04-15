import React from 'react';
import {FaSearchengin} from 'react-icons/fa'

const SearchBar = ({Keyword, updateKeyword})=>{
    return(
        <React.Fragment>
            <div className="search-bar">
            <input type="text" placeholder="search item" value={Keyword} onChange={e=> updateKeyword(e.target.value)}></input>
            </div>
        </React.Fragment>
    );

}

export default SearchBar;