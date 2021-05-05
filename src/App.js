import './App.css';
import SignUp from './Pages/SignUp/SignUp'
import LogIn from './Pages/LogIn/LogIn'
import  VerifyEmail from './Pages/VerifyEmail/VerifyEmail'
import Dashboard from './Pages/Dashboard/Dashboard'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="App">
        <Route path="/" exact component={Dashboard}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/verify" component={VerifyEmail}/>
      </div>
    </Router>
    
  );
}

export default App;
