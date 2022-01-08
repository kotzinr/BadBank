function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [username, setUsername]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}
  
function handleCreate(){
  console.log(username,password);
  if (!validate(username,    'username'))    return;
  if (!validate(password, 'password')) return;
  ctx.users.push({username,password});
  setShow(false);
}    

function clearForm(){
  setUsername('');
  setPassword('');
  setShow(true);
}

return (
  <Card
    bgcolor="success"
    header="Login"
    status={status}
    body={show ? (  
            <>
            Username<br/>
            <input type="input" className="form-control" id="username" placeholder="Enter username" value={username} onChange={e => setUsername(e.currentTarget.value)} /><br/>
          
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Logout</button>
            </>
          )}
  />
)
}
  
