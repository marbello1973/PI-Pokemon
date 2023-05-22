import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import { Card, Home, Form, Landing } from "./views/index";
import "./App.css";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Router>
        {location.pathname !== "/" && <Home />}
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/form" render={() => <Form />} />
        <Route exact path="/card/:card" render={() => <Card />} />
      </Router>
    </div>
  );
}

export default App;
