import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Home, Form, Landing, Card } from "./views/index";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/form" render={() => <Form />} />
      <Route exact path="/home/:id" render={() => <Card />} />
    </div>
  );
}

export default App;
