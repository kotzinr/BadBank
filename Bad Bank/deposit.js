
  const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input className="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  const Account = () => {
    // let deposit = 0; // state of this transaction
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      console.log(Number(event.target.value));
  
      if (event.target.value == '') {
        setValidTransaction(false);
        return;
     }
     
    //  if (!(typeof event.target.value === "number")) {
    //  alert("not a number");
    //  return;
    // }

    // console.log(event)
    //  console.log("is a negative number", !(typeof event.target.value === "number"))

      if (event.target.value <= 0) {
        alert("you are attempting to deposit a negative number");
        return;
      }
      
     

     

      if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
        setValidTransaction(false);
        
    
      } else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
      
      
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal), alert("Deposit received");
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(event.target.value);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      if (event.target.value === 'Deposit') {
        setIsDeposit(true);
      } else {
        setIsDeposit(false);
      }
    };
  
    return (
      <div className="card" style={{maxWidth: 375}}  className="bg-success p-2 text-white">
      <div className="card-body"> 
      <h5 className="card-header" style={{maxWidth: 375}}>Deposit</h5>
      
      
      <form onSubmit={handleSubmit}>
        <>
          <h2 id="total">{status}</h2>
          <label>Select an action below to continue</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">
              Deposit
            </option>
            {/* <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option> */}
         
          </select>
        
          {atmMode && (
            <ATMDeposit
              onChange={handleChange}
              isDeposit={isDeposit}
              isValid={validTransaction}
            ></ATMDeposit>
          )}
          
        </> 
        
      </form>
      
    </div>
    </div>  
    

    );
  };
 