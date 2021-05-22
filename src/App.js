import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllDishes from './components/dishTable';
import Container from './components/container';
import EditDish from './components/editDish';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/foodDashboard/" exact component={Container} />
          <Route path="/foodDashboard/admin" exact component={AllDishes} />
          <Route path="/foodDashboard/edit" exact component={EditDish} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
