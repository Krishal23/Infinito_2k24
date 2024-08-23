
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import logo from './assets/logo/logo.png'; // Adjust the path based on your file structure
// import './navbar.css'; // Import the CSS file
import Campus_ambassador from './Components/js/campus_ambassador';
import About_us from './Components/js/about_us';
import Events from './Components/js/events';
import Gallery from './Components/js/gallery';
// import Merchandise from './Components/merchandise';
import Sponsors from './Components/js/sponsors';
import Our_team from './Components/js/our_team';

import Navbar2 from './Components/js/Navbar';
import EventsInside from './Components/js/events_inside';
import Merchandise from './Components/js/merchandise';

function App() {
  return (
    <>
     {/* <Router>
  <Routes>
    <Route path="/" element={<Events />} />
    <Route path="/events-inside" element={<EventsInside />} />
  </Routes>
</Router> */}
    {/* <EventsInside/> */}
    {/* <Navbar2/> */}
    {/* <Gallery/> */}
    <Events/> 
    {/* <About_us/> */}
    {/* <Sponsors/> */}
    <Merchandise/>
    {/* <Campus_ambassador/> */}
    {/* <Our_team/>  */}
    </>
);
}

export default App;
