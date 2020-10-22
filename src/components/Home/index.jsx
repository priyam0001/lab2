import React from 'react';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';



// You need to import your shared header...

const Home = () => {
  return (
    <>
    
    <Header/>
    <button >
      <Link to ="/About">About</Link>
    </button>
      {/* You need to use your shared header component... */}
      {/* You need a link to your about page as a call to action */}
    </>
  );
}
 
export default Home;