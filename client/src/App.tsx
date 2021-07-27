import "./App.css";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <Router>
      <Navbar />
      <Container style={{height: '100%'}}>
        <Switch>
          <Route path="/" component={TasksList} exact />
          <Route path="/new-task" component={TaskForm} />
          <Route path="/edit-task/:id" component={TaskForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;