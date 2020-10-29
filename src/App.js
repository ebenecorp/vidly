import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from './components/notfound';
import MovieDetails from './components/movieDetails';
import ProtectedRoute from './components/common/protectedRoute';
import LoginForm from './components/loginForm';
import Register from './components/register';
import Logout from './components/logout';
import auth from './services/authService';
import "./App.css";
import "react-toastify/dist/ReactToastify.css"

class App extends Component {
  state = {

  };

  componentDidMount() {
      const user = auth.getCurrentUser()
      this.setState({ user });
  }


  render() {
    const { user } = this.state;
    return (
      <div>
        <ToastContainer />
        <NavBar user={this.state.user}/>
        <main className="container">
          <Switch>
            <Redirect exact  from="/" to="/movies"/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/register" component={Register}/>
            <ProtectedRoute path="/movies/:id" component={MovieDetails} />
            {/* <Route path="/movies/new" component={MovieDetails}/> */}
            <Route path="/movies" render={props =><Movies {...props} user={user} />} />
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
