import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import { Login } from './pages/login/Login';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
