import React from 'react';
import logo from "../images/logo2.png"; // Adjust the path based on your file structure
import '../stylesheets/navbar.css'; // Import the CSS file
// import events from './pages_html/events.html';
// import Campus_ambassador from '../Components/campus_ambassador';
// import about_us from './Components/about_us';
// import Events from './Components/events';
// import Gallery from './Components/gallery';
// import Merchandise from './Components/merchandise';
// import Sponsors from './Components/sponsors';
// import Our_team from './Components/our_team';

function Navbar2() {
    return (
        <>
      <div className="navBox">
            <nav className="nav">
            <a href="#home" className="nav-logo">
                <img src={logo} alt="Logo" />
            </a>
            <div className="nav-links">
                <a href="#gallery" className="nav-link">Gallery</a>
                <a href="#Events" className="nav-link">Events</a>
                <a href="#aboutus" className="nav-link">About Us</a>
                <a href="#sponsors" className="nav-link">Sponsors</a>
                <a href="#merchandise" className="nav-link">Merchandise</a>
                <a href="#campusambassador" className="nav-link">Campus Ambassador</a>
                <a href="#team" className="nav-link">Our Team</a>
            </div>
        </nav>
        </div>
        </>
    );
}

export default Navbar2;
