import errLogo from '../error-404.png';
import { Link } from "react-router-dom";

// This component will display if route or search is invalid
const NotFound = () => {
    return (
        <>
            <h3 style={{color: 'red'}}>Page not found!</h3>
            <li className='not-found'>
            <img src={errLogo} alt='404 Logo'/>
            </li>
            <div>Icons made by <Link to='#'  title="smalllikeart">smalllikeart</Link> from <Link href="https:/   /www.flaticon.com/" title="Flaticon">www.flaticon.com</Link></div>
        </>

    );
}

export default NotFound;