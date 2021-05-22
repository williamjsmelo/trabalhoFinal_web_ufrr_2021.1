import React from "react";
import Navbar from './Navbar';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Create from './Create';
import Login from "./Login";
import BlogDetails from './BlogDetails';
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <AuthProvider>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/blogs/:id" component={BlogDetails} />
                <PrivateRoute exact path="/create" component={Create} />
            </Switch>
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
};

export default App;
