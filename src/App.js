import './App.css';
import { BrowserRouter as  Router,Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Search from './Pages/Search';
import Quiz from './components/Quiz';
import Materials from './components/Materials';
import Volunteer from './Pages/Volunteer'
import Logout from './Pages/Logout';
import Card from './Cards/Cards'
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


function App() {
  return(
    
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Card}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/quiz' component={Quiz}/>
        <Route exact path='/materials' component={Materials}/>
        <Route exact path='/volunteer' component={Volunteer}/>
        <Route exact path='/logout' component={Logout}/>
      </Switch>
    </Router>
  );
}

export default App;