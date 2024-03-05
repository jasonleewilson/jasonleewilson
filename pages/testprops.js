import React from "react";
import ReactDOM from "react-dom";

function Testprops() {
  return (
    <Greeting
      name='Wilson'
      yearsexperience={25}
      occupation='Front-End Engineer'
    />
  );
}

function Greeting(props) {
  return (
    <p>
      Hello! I&rsquo;m {props.name}, with {props.yearsexperience} years of
      experience as a {props.occupation}. Pleased to meet you!
    </p>
  );
}

export default Testprops;
