import React from 'react';
import { UserContext } from './context';


function AllData(){
  const ctx = React.useContext(UserContext);  
  return (
    <div className="card bg-success p-2 text-white" style={{maxWidth: window.innerWidth}}  >
    <div className="card-body"> 
    <h5 className="card-header" style={{maxWidth: window.innerWidth}}>User data</h5>
    <h5>All Data<br/>
      {JSON.stringify(ctx)}
    </h5>
    </div>
    </div>
  );  
}

export { AllData };