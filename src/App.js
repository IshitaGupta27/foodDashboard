import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import AllDishes from './components/dishTable';
import Container from './components/container';
import EditDish from './components/editDish';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/admin" exact component={AllDishes} />
          <Route path="/edit" exact component={EditDish} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
