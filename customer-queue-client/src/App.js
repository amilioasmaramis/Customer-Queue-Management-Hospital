import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact="/login">
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
