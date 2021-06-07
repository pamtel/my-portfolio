import './App.css';
import {useState} from 'react'
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import { Switch, Route } from "react-router-dom";

function App() {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
      setNavToggle(!navToggle)
    }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar navClick={navClick}/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>

            <Route path='/about' exact>
                <About/>
            </Route>

            <Route path='/skills' exact>
                <Skills/>
            </Route>

            <Route path='/portfolios' exact>
                <Portfolios/>
            </Route>

            <Route path='/contact' exact>
                <Contact/>
            </Route>
          </Switch>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
