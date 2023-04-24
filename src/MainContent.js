import { useState } from "react";
import { useNavigate } from "react-router";
import Heroes from "./Heroes/Heroes";
import MyTeam from "./MyTeam/MyTeam";
import Search from "./Search/Search";
import SearchedHeroes from "./Search/SearchedHeroes";
const MainContent = ({heroes, searchQuery, setSearchQuery}) => {
    const [teamMembers, setTeamMembers] = useState([]);

    const addHero = (hero) =>{
        const alreadyAdded = teamMembers.some((teamMember) => teamMember.id === hero.id);
        if (teamMembers.length === 4){
            return alert('You can have a maximum of 4 heroes in a team. Please remove a hero before adding a new one.')
        }
        if (alreadyAdded){
            return alert(`${hero.name} is already added in your team!`)
        }
       setTeamMembers(prevTeamMembers => [...prevTeamMembers,hero])
       console.log(hero);
    }

    const filteredterm = searchQuery.toLowerCase()

    const navigate = useNavigate()

    const handleHeroClick = (id) => {
        navigate(`/heroes/${id}`);
        setSearchQuery("");
      };
    return(
        <div className="wrapper black">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="row">
            <div className="col l3 m8 s10 right">
                    <MyTeam teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
                </div> 
                <div className="col l9 s12">
                    <div className="heroes">
                    {searchQuery ? (<SearchedHeroes term={filteredterm} handleHeroClick={handleHeroClick} addHero={addHero}/>) : (<Heroes heroes={heroes}  handleHeroClick={handleHeroClick} addHero={addHero}/>)}
                    </div>
                </div>            
                
            </div>
            </div>
  
    )
}
export default MainContent;