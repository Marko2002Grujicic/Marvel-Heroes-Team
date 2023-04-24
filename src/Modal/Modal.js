import { FaWindowClose } from "react-icons/fa"
import './Modal.css'
const Modal = ({comic, setOpenModal}) => {

    console.log(comic);
    const formatDate = (dateOfPrint) =>{
        const date = new Date(dateOfPrint)
        const formattedDate = date.toLocaleDateString('en-GB')
        return formattedDate;
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="row title">
               
                    <h4>{comic.title}</h4>
                  <div className="closeBtn">
                    <FaWindowClose onClick={()=> {setOpenModal(false)}} id="button"/> 
                  </div>
                    
           
                </div>
                <div className="row">
                <div className="body">
                    <div className="info col l6 s12">
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Characters</h6>
                        <ul className="gray-data ">
                            {comic.characters.items.map(character => (
                                <span key={character.name} className="text">{character.name},</span>
                            ))}
                            </ul>
                        </div>
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Date of print</h6>
                        <h6 className="gray-data">{formatDate(comic.dates[0].date)}</h6>
                        </div>
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Creators</h6>
                        <h6 className="gray-data">
                            {comic.creators.items.map(item => (
                                <span className="text" key={item.name}>{item.name}, </span>
                        ))}</h6>
                        </div>
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Price</h6>
                        <h6 className="gray-data"> {comic.prices[0].price}$</h6>
                            </div>
                        
                    </div>
                    <div className="notes col l6 s12">
                        <h6 className="gray-info">
                            Cover
                        </h6>
                        <div className="text-container">
                        <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} className="card-image single-comic comic-cover" alt="thumbnail"/>
                       
                        </div>
                        
                        
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Modal