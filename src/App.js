import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";

function App() {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
