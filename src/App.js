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
import Topbar from './components/topbar/Topbar';
import { UserList } from './pages/userList/UserList';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
