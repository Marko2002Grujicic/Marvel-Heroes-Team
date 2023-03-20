import Heroes from "./Heroes/Heroes";
import MyTeam from "./MyTeam/MyTeam";
import './MainContent.css'
import Search from "./Search/Search";
import SearchedHeroes from "./Search/SearchedHeroes";
const MainContent = ({heroes, searchQuery, setSearchQuery}) => {
    const filteredHeroes = heroes.filter((heroes) => heroes.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return(
        <div className="wrapper">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="main-content-container">
            
            <div className="heroes">
                {searchQuery ? (<SearchedHeroes heroes={filteredHeroes} setSearchQuery={setSearchQuery}/>) : (<Heroes heroes={heroes}/>)}
            
            </div>
            <div className="myteam">
            <MyTeam/>
            </div>
            
            

            
        </div>
        </div>
       
    )
}
export default MainContent;