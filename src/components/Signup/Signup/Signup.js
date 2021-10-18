import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import Form from "../Form/Form";
import Illustration from "../Illustration/Illustration";
import TextInput from "../TextInput/TextInput";
import Button from "./../Button/Button";
import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms & Conditions" />
          <Button> Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
