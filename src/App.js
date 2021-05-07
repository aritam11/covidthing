import './App.css';
import SignUp from './Pages/SignUp/SignUp'
import LogIn from './Pages/LogIn/LogIn'
import  VerifyEmail from './Pages/VerifyEmail/VerifyEmail'
import Dashboard from './Pages/Dashboard/Dashboard'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const basename = "covidthing"
function App() {
  
  return (
    <div className="App">
      
          <Router basename={basename || 'covidthing'}>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/verify" component={VerifyEmail}/>
          </Router>
    </div>
    
    
    
  );
}

export default App;
