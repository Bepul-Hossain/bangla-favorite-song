const Search = ({ textChange, userSearchText }) => {
    return (
        <input type="text" placeholder="Search by english name" value={userSearchText} onChange={textChange} />
    )
}

export default Search