import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Home from './Home.js';
import Login from './Login.js';


function App() {
  return (
    <Form className="login-form">
      <h1 className="text-center">Welcome to the GoDaddy ATM.</h1>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <h2 className="text-center">Enter your account number to get started.</h2>
      <FormGroup>
        <Input type="search" placeholder="Account Number"></Input>
      </FormGroup>
      <Button className="btn-lg btn-primary btn-block">Login</Button>
    </Form>
  );
}

export default App;
