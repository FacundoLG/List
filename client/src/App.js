import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Singup from "./pages/auth/Singup";
import Singin from "./pages/auth/Singin";
import { UserContext } from "./context/user/UserContex";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/singup">
            <Singup />
          </Route>
          <Route path="/singin">
            <Singin />
          </Route>
          <Layout>
            {user.token ? "" : <Redirect to="/singin" />}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/setings">
              <Home />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
