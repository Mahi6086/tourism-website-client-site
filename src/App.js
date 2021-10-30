import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Tours from "./components/HomePage/Tours/Tours";
import Admin from "./components/AdminDeshBoard/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Menubar from "./components/HomePage/Menubar/Menubar";
import Footer from "./components/HomePage/Footer/Footer";
import Register from "./components/Register/Register";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import NotFound from "./components/NotFound/NotFound";
import ExploreTour from "./components/ExploreTour/ExploreTour";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminDeshBoard from "./components/AdminDeshBoard/AdminDeshBoard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <AdminDeshBoard></AdminDeshBoard>
          </PrivateRoute>
          <PrivateRoute path="/exploreTour/:tourId">
            <ExploreTour></ExploreTour>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
