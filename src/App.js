import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Shared/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Authenticaton/Login/Login';
import Register from './Pages/Authenticaton/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
     <AuthProvider>
        <Router>
          <Header />
            <Switch>
            <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/service/:serviceId">
                <ServiceDetails />
              </Route>
              <PrivateRoute path="/about">
                <About />
              </PrivateRoute>
              <PrivateRoute path="/contact">
                <Contact />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="*">
              <NotFound />
              </Route>
            </Switch>
            <Footer />
          </Router>
     </AuthProvider>
  );
}

export default App;
