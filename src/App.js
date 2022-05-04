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

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
