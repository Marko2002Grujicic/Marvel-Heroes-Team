import { useNavigate } from 'react-router';
import './Header.css'
const Header = () =>{
    const navigate = useNavigate()
    return (
        <div>
            <header onClick={() => navigate('/')}>Marvel Hero Team</header>
        </div>
        
    )
}
export default Header;