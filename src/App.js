import './App.css';
import SignUp from './Pages/SignUp/SignUp'
import LogIn from './Pages/LogIn/LogIn'
import  VerifyEmail from './Pages/VerifyEmail/VerifyEmail'
import Dashboard from './Pages/Dashboard/Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreateReq from './Pages/CreateReq/CreateReq';
import Plasma from './Components/Forms/Plasma/Plasma';

function App() {
  
  return (
    <div className="App">
          <Router>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/verify" component={VerifyEmail}/>
            <Route path="/createRequest" component={CreateReq}/>
            <Route path="/plasma" component={Plasma}/>
          </Router>
    </div>
    
    
    
  );
}

export default App;
