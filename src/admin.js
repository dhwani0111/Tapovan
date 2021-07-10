import React from "react";
import Card from './Cards/Cards';
import { useHistory } from 'react-router-dom';
import fire from "./firebase";
import Login from './Login'
import Navbar from './components/Navbar';
//admin page edit here

const Admin = () => {
    function handleLogOut() {
        fire.auth().signOut();
        <Login/>
        console.log('hello')
      }
    return (
       <>
        {/* //     <div>
        //         {history.push(`\admin`)}
        //     </div> */}
            
            <Navbar/>
            
                <button onClick={handleLogOut}>Logout</button>
           

        </>
    );
};

export default Admin;
