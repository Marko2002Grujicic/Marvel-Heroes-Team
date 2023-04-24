import './MyTeam.css'
import {FaTrash} from 'react-icons/fa'
const MyTeam = ({teamMembers, setTeamMembers}) =>{
    const removeHero = (id) =>{
        setTeamMembers((prevTeamMembers) => prevTeamMembers.filter((hero) => hero.id !== id))
    }
    return (
        <div className="container my-team col l12 s8">
            <h4 className='myteam'>My Team</h4>
            <div className='row'>
                {teamMembers && teamMembers.length === 0 ? (<p>Add some heroes to your team!</p>) : (teamMembers.map(hero => (

                    <div className="card horizontal">
                        <div className='myteam-image'>
                            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}  alt="My Team  Hero"/>
                            <FaTrash className='trashIcon' onClick={()=> removeHero(hero.id)}/>
                        </div>
                            <div className='card-content-myteam col'>
                                <span className="myteam-hero">{hero.name}</span>
                            </div>
                    </div>
                    
                ))) 
                }
            </div>
            
         </div>
    )
}
export default MyTeam;