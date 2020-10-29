import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import auth from '../services/authService';

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async() => {
    //call server
    try {
      const response = await userService.register(this.state.data)
      auth.loginWithJWT( response.headers['x-auth-token'] );
      window.location = '/';
    } catch (error) {
      if(error.response && error.response.status === 400){
        const errors = {...this.state.errors};
        errors.email = error.response.data;
        this.setState({ errors });
    } 

      
    }
    
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
