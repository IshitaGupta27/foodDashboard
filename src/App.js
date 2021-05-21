import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllDishes from './components/dishTable';
import Container from './components/card';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/admin" exact component={AllDishes} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
