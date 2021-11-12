import React from 'react'
import './styles/search.css'
import { BsSearch } from "react-icons/bs";

function SearchBar({ searchFunction }) {
    return (
        <div className='search-bar--container'>
            <span className="search-icon">
                <BsSearch />
            </span>
            <input onKeyUp={ searchFunction } type="text" className="search-bar" placeholder='Find something...' />
            <button className="search-button">Search</button>
        </div>
    )
}

export default SearchBar
