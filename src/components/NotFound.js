import React from 'react';
import errLogo from '../error-404.png';

// This component will display if route or search is invalid
const NotFound = () => {
    return (
        <>
            <h1><a href="/">Home</a></h1>
            <h3 style={{color: 'red'}}>Page not found!</h3>
            <li className='not-found'>
            <img src={errLogo} alt='404 Logo'/>
            </li>
            <div>Icons made by smalllikeart from www.flaticon.com</div>
        </>

    );
}

export default NotFound;