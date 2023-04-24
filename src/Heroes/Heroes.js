import './Heroes.css'
const Heroes = ({heroes, handleHeroClick, addHero}) =>{

    return (
        <div className="container">
            <div className='row'>
            {heroes.map((hero => (
                <div className="col s12 m6 l4" >
                    <div className="card">
                        <div className='higher'>
                        <span className="card-title">{hero.name}</span>
                        </div>
                        <div className='card-image'>
                        <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name}/>
                        </div>
                        <div className="card-content">
                            <button className='btn-floating black' onClick={()=> handleHeroClick(hero.id)}>Info</button> 
                            <button id="add" className="btn-floating black" onClick={()=> addHero(hero)}>Add</button>
                        </div>
                        
                    </div>
                </div>
            )))}
            </div>
            </div>
    )
    
}
export default Heroes;