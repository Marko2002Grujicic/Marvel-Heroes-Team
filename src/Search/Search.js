
import './Search.css'
const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="container" id="search-area">
          <input id="search" type="search" placeholder="Search characters" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          </div>
        
    )
}
export default Search