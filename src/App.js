import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/header";
import CardController from "./Components/Cards/CardController";
import Footer from "./Components/Footer/footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container">
              <Header />
              <CardController />
              <Footer />
            </div>
          </Route>
          <Route path="*">
            <h2 className="text-center">
              Page Not Found! Please go <Link to="/">Home!</Link>
            </h2>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
