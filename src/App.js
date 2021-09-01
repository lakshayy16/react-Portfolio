import './App.css';
import Connection from './components/Connection';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Courses from './components/Courses';
import OnceCourse from './components/OnceCourse';

function App() {
  return (
    <Router>
    <div className="App">
     <Connection/>
     <div className='content'>
       <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path ='/Home'><Home/></Route>
            <Route path ='/AboutMe'><AboutMe/></Route>
            <Route exact path="/Courses"> <Courses /> </Route>
            <Route path ='/Courses/:id'><OnceCourse/></Route>
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
