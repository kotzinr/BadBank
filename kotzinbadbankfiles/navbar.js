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