import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar =()=> (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="activate" to= "/Hero">
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