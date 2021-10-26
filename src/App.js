import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Quiz from "./components/Quiz/Quiz/Quiz";
import Result from "./components/Result/Result/Result";
import Signup from "./components/Signup/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Result />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
