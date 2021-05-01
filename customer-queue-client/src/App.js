// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Antrian from './pages/Antrian'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/antrian">
          <Antrian />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
