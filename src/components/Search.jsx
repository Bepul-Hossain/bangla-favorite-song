const Search = ({ textChange, userSearchText }) => {
    return (
        <input type="text" placeholder="search song name by english letter" value={userSearchText} onChange={textChange} />
    )
}

export default Search