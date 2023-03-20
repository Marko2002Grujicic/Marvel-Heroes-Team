
const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="container">
        <div className="input-field">
          <input id="search" type="search" placeholder="Search shows" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
        </div>
        </div>
    )
}
export default Search