import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Logout } from './components/Logout';
import { Navbar } from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route >
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
