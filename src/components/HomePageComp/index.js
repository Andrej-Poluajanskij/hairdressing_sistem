import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import * as ROUTES  from '../../routes';


const HomePage = () => {
    return(
       
            <div className="main-container home-page">
            {/* <h1>Sveiki atvyke</h1> */}
            <div className="half-page main-left">
                <div className="enter-left">
                    <Link to={ROUTES.ADMINPAGE}>Hairdresser</Link>
                    <span>&#8592;</span><p>Enter to hairdresser</p>
                </div>
            </div>
            <div className="half-page main-right">
                <div className="enter-right">
                    <p>Enter to clients</p><span>&#8594;</span>
                    <Link to={ROUTES.USERPAGE}>Clients</Link>
                </div>
            </div>
            </div> 
         
    )
}

export default HomePage;