import React from "react";
import Form from "../Signup/Form/Form";
import Illustration from "../Signup/Illustration/Illustration";
import TextInput from "../Signup/TextInput/TextInput";
import Button from "./../Signup/Button/Button";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Submit Now</Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
