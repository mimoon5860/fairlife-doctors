import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Header from './pages/Header/Header';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Vaccine from './pages/Covid19Vaccine/Vaccine';
import HealthCare from './pages/Healthcare/HealthCare';

const style = {
  fontFamily: "'Lato', sans- serif"
}

function App() {
  return (
    <div style={style}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/vaccine">
            <Vaccine></Vaccine>
          </Route>
          <Route path="/healthcare">
            <HealthCare></HealthCare>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
