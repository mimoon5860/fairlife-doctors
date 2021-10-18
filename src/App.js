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
import Appoinment from './pages/Appoinment/Appoinment';
import AuthProvidor from './Hooks/AuthProvidor/AuthProvidor';
import PrivateRoute from './Hooks/PrivateRoute/PrivateRoute';

const style = {
  fontFamily: "'Lato', sans- serif"
}

function App() {
  return (
    <AuthProvidor>
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
            <PrivateRoute path="/vaccine">
              <Vaccine></Vaccine>
            </PrivateRoute>
            <PrivateRoute path="/healthcare">
              <HealthCare></HealthCare>
            </PrivateRoute>
            <PrivateRoute path="/appoinment/:id">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvidor>
  );
}

export default App;
