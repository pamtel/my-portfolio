import './App.css';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';
import { Switch, Route } from "react-router-dom";
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar/>
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
