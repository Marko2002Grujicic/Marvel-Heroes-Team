import { useEffect, useState } from "react"
import './Comics.css'
import Modal from "../Modal/Modal";

const Comics = ({singleHeroId}) => {
    const [comics, setComics] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [modalComic, setModalComic] = useState([]);
    useEffect(() => {
        const APIKey = '354ccd1ec621ef1a5005bc23b26f8aa6'
        fetch(`https://gateway.marvel.com:443/v1/public/characters/${singleHeroId}/comics?format=comic&apikey=${APIKey}`)
        .then((res) => res.json())
        .then((data)=> {
          setComics(data.data.results);
        })
      }, [singleHeroId])
     
      
    const renderComics = (comics) => {
        return (
        comics.map((comic => 
            <div className="col l3 m6 s12" onClick={() => {
                setOpenModal(true) 
                setModalComic(comic)}}>
                <div className="card">
                    <div className="card-image single-comic">
                        <img src={`${comic.thumbnail.path}.jpg`} alt="thumbnail"/>
                        <span className="card-content center">{comic.title}</span>
                    </div>
                </div>
                
            </div>
            ))
        )
    }
    return (
        <div className="gap wide">
            {renderComics(comics)}
            {openModal && <Modal comic={modalComic} setOpenModal={setOpenModal} />}

        </div>
           
    )
}
export default Comics;