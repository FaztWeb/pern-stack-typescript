import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={TasksList} exact />
        <Route path="/new-task" component={TaskForm} />
        <Route path="/edit-task/:id" component={TaskForm} />
      </Switch>
    </Router>
  );
}

export default App;
