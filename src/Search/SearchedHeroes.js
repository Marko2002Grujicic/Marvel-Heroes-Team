import { useNavigate } from 'react-router';
import './Search.css'

const SearchedHeroes = ({heroes, setSearchQuery}) =>{
    const navigate = useNavigate();

    const handleHeroClick = (id) => {
        navigate(`/heroes/${id}`);
        setSearchQuery("");
      };

    return (
        <>
        <div className="hero-container">
            <div className='flex'>
            {heroes.map((hero => (
                <div className="card" onClick={()=> handleHeroClick(hero.id)}>
                    <div className="hero-info">
                        <h2>{hero.name}</h2>
                        <div className='card-img'>
                        <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name}/>
                        </div>
                        
                    </div>
                    <button className='btn'>Info</button> <button className='btn'>Add</button>
                </div>
            )))}
            </div>
            </div>
        </>
    )
}
export default SearchedHeroes