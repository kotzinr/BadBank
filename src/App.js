import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import { UserContext } from './context';
import { Home } from './home';
import { CreateAccount } from './createaccount';
import { Login } from './login';
import { Account } from './deposit';
import { Withdraw } from './withdraw';
import { AllData } from './alldata';



function App() {
  return (
    <HashRouter>
      <NavBar/>
    
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
         <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Account} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}


    
    function NavBar(){
  

      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" id="tooltip" href="#" >Home
          <span id ="tooltiptext">Welcome to Bad Bank</span></a>
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              
    
             
             
    
                <a className="nav-link" id="tooltip" href="#/CreateAccount/">Create Account
                <span id ="tooltiptext">Create a new account at Bad Bank</span></a>
                </li>
               
              <li className="nav-item">
                <a className="nav-link" id="tooltip" href="#/login/" >Login <span id ="tooltiptext"> Login here but it won't actually take you anywhere</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tooltip" href="#/deposit/" tooltipText="make a deposit">Deposit
                <span id ="tooltiptext">make a deposit of any amount</span></a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tooltip" href="#/withdraw/" >Withdraw
                <span id ="tooltiptext">Withdraw some money but put some in first because your account balance won't update in this janky app</span></a>
              </li>
          
              <li className="nav-item">
                <a className="nav-link" id="tooltip" href="#/alldata/">AllData
                <span id ="tooltiptext">everyone's data in a big unreadable mess of a blurb</span></a>
              </li>          
            </ul>
          </div>
        </nav>
        </>
      );
    }
    
   
    
    


export default App;
