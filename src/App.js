import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
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
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
