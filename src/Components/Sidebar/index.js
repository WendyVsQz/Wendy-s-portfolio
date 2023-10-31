import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../Assets/images/logo-s.png'
import LogoSubtitle from '../../Assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar =()=> (
    <div className='nav-bar'>
    <Link className='logo' to= '/'>
        <img src={LogoS} alt='logo'/>
        <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="activate" to= "/">
                <FontAwesomeIcon icon={faHome} color= "#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="activate" className="about-link" to= "/about">
                <FontAwesomeIcon icon={faUser} color= "#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="activate" className="contact-link" to= "/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#4d4d4e"/>
            </NavLink>
        </nav>
    </div>

)


export default Sidebar;