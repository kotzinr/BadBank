import { Card } from './context';

function Home(){
  return (
    <Card
      
      
      header="BadBank Landing Module" bgcolor="success"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

export { Home }; 