import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from './components/notfound';
import MovieDetails from './components/movieDetails';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Redirect exact  from="/" to="/movies"/>
            <Route path="/movies/:id" component={MovieDetails}/>
            <Route path="/movies" component={Movies} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/customers" component={Customer} />
            <Route path="/rentals" component={Rentals} />
            <Redirect to="/notfound"/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
