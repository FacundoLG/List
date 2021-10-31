import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Singup from "./pages/auth/Singup";
import Singin from "./pages/auth/Singin";

function App() {
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
