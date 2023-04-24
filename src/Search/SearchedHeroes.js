import { useEffect, useState } from 'react'
import './Heroes.css'

const SearchedHeroes = ({term, handleHeroClick, addHero}) =>{
        const [searchedHero, setSearchedHero] = useState([]);
        useEffect(() => {
            const APIKey = '354ccd1ec621ef1a5005bc23b26f8aa6'
            fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${term}&apikey=${APIKey}`)
            .then((res) => res.json())
            .then((data)=> {
              setSearchedHero(data.data.results);
            })
          }, [term])
      return (
        <div className="container">
            <div className='row'>
            {searchedHero.map((hero => (
                <div className="col s12 m6 l4">
                    <div className="card" >
                        <div className='higher'>
                        <span className="card-title higher">{hero.name}</span>
                            </div>
                        
                        <div className='card-image'>
                        <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name}/>
                        </div>
                        <div className="card-content">
                            <button className='btn-floating black' onClick={()=> handleHeroClick(hero.id)}>Info</button> 
                            <button id="add"className="btn-floating black" onClick={()=> addHero(hero)}>Add</button>
                        </div>
                        
                    </div>
                </div>
            )))}
            </div>
            </div>
    )
}
export default SearchedHeroes