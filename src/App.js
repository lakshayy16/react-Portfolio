import './App.css';
import Connection from './components/Connection';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Connection/>
     <div className='content'>
       <Switch>
            <Route path ='/Home'>
                <Home/>
            </Route>
            <Route path ='/AboutMe'>
              <AboutMe/>
            </Route>
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
