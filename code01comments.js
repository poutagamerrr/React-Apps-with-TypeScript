// We import React normally (optional in newer React versions)
import React from "react";

/*
 STEP 1: Define a type for the component props.
 In JavaScript, props are untyped. In TypeScript, we create an interface.
*/
interface GreetingProps {
  name: string; // The 'name' prop must be a string
}

/*
 STEP 2: Convert the function to a typed functional component.
 We add : React.FC<GreetingProps> to enforce typing.
*/
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// STEP 3: Export it normally
export default Greeting;
