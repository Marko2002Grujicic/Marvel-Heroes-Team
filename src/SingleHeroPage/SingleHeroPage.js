import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comics from "./Comics";
import './SingleHeroPage.css'

const SingleHeroPage = () =>{
    const [singleHero, setSingleHero] = useState([]);
    const {id} = useParams();
    const [showComics, setShowComics] = useState("yes")
    useEffect(() => {
        const APIKey = '354ccd1ec621ef1a5005bc23b26f8aa6'
        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${APIKey}`)
        .then((res) => res.json())
        .then((data)=> {
          setSingleHero(data.data.results[0]);
        })
      }, [])
  

      const handleToggleComics = () => {
        const newLayout = showComics === "yes" ? "no" : "yes";
        setShowComics(newLayout);
      }
      
    return(
        <> {Object.keys(singleHero).length > 0 ? (
        <div className="row gap">
            <div className="col l6 s12">
            <img src={singleHero.thumbnail.path + '.' + singleHero.thumbnail.extension} alt={singleHero.name} className='singlePage-cover'/>
            </div>
            <div className="col l6 s12">
                <div className="section">
                <h2>{singleHero.name}</h2>
                </div>
                <div className="row padding-top">
                    <div className=" col s12">
                        <h5>{singleHero.description ? singleHero.description: "No description for this character"}</h5>
                    </div>
                </div>
            
            </div>
            <div className="row"></div>
            <div className="col s6">
            <button className="blue btn" onClick={() => handleToggleComics()}>
                {showComics === "yes" ? ("Hide Comics") : ("Show Comics")}</button>
            </div>
            {showComics === "yes" ? (<div className="row">
                <div className="col l12">
                <Comics singleHeroId={singleHero.id} />
                </div>
            </div>) : (<div></div>)}
            
        </div>
        ) : ( <div className="row gap">
            <div className="col l12">
            <div className="preloader-wrapper red active">
    <div className="spinner-layer spinner-red-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
            </div>
        </div>
        )}
        </>
        
    )
}
export default SingleHeroPage;