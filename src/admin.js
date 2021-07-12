import { BrowserRouter as  Router,Route, Switch } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Card from './Cards/Cards';
import { useHistory } from 'react-router-dom';
import fire from "./firebase";
import Login from './Login'
import './admin.css'
import Navbar from './components/Navbar';
import Signup from './signUp';
//admin page edit here
<link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>
const Admin = () => {
    const history=useHistory()
    function handleLogOut() {
        fire.auth().signOut().then(function(){
            history.push("/");
            // <Router>
            //     <switch>
                 
            //         <Route exact path='/' component={Signup}/>
                    
            //     </switch>
            // </Router>
        })
      
      }
    return (
       <>
            <Navbar/>   
{/* <div id="page-wrapper" class="container">
  <div class="row">
	<div class="col-lg-12">
		<h1>Dashboard <small>Statistics Overview</small></h1>
		<ol class="breadcrumb">
			<li class="active"><i class="fa fa-dashboard"></i> Dashboard</li>
		</ol>
	</div>
</div>
<div class="row">
	<div class="col-lg-3">
		<div class="panel panel-info">
			<div class="panel-heading">
				<div class="row">
					<div class="col-xs-6">
						<i class="fa fa-users fa-5x"></i>
					</div>
					<div class="col-xs-6 text-right">
						<p class="announcement-heading">1</p>
						<p class="announcement-text">Total Students</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="panel panel-warning">
			<div class="panel-heading">
				<div class="row">
					<div class="col-xs-6">
						<i class="fa fa-check fa-5x"></i>
					</div>
					<div class="col-xs-6 text-right">
						<p class="announcement-heading">12</p>
						<p class="announcement-text">Total Active Quiz</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="panel panel-danger">
			<div class="panel-heading">
				<div class="row">
					<div class="col-xs-6">
						<i class="fa fa-check fa-5x"></i>
					</div>
					<div class="col-xs-6 text-right">
						<p class="announcement-heading">18</p>
						<p class="announcement-text">Total Completed Quiz</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="panel panel-success">
			<div class="panel-heading">
				<div class="row">
					<div class="col-xs-6">
						<i class="fa fa-comments fa-5x"></i>
					</div>
					<div class="col-xs-6 text-right">
						<p class="announcement-heading">56</p>
						<p class="announcement-text">Total Materials</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div><br></br> */}
<div class="container bootstrap snippets bootdey">
  <div class="row">
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading blue"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content blue">
          <div class="circle-tile-description text-faded">Total Students</div>
          <div class="circle-tile-number text-faded ">265</div>
          
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading blue"><i class="fa fa-check fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content blue">
          <div class="circle-tile-description text-faded">Total Active Quiz</div>
          <div class="circle-tile-number text-faded ">10</div>
          
        </div>
      </div>
    </div> 
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading blue "><i class="fa fa-check-square fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content blue">
          <div class="circle-tile-description text-faded">Total Completed Quiz</div>
          <div class="circle-tile-number text-faded ">10</div>
          
        </div>
      </div>
    </div> 
    <div class="col-lg-2 col-sm-6">
      <div class="circle-tile ">
        <a href="#"><div class="circle-tile-heading blue"><i class="fa fa-book fa-fw fa-3x"></i></div></a>
        <div class="circle-tile-content blue">
          <div class="circle-tile-description text-faded">Total Material</div>
          <div class="circle-tile-number text-faded ">10</div>
          
        </div>
      </div>
    </div>
    </div>
    </div>
            <button onClick={handleLogOut}>Logout</button>
           

        </>
    );
};

export default Admin;
