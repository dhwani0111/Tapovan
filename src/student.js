import React from "react";

import Card from './student/Cards/studentCards'
//student page edit here
import fire from "./firebase";
import Login from './Login'
import { useHistory } from 'react-router-dom';
import Navbar from './student/components/Navbar'

const Student = () => {
    let history = useHistory();

    function handleLogOut() {
        fire.auth().signOut();
        <Login/>
        console.log('hello')
      }
    
    return (
        <>
        <Navbar/>
                <button onClick={handleLogOut}>Logout</button>
            
            

        </>
    );
};

export default Student;
