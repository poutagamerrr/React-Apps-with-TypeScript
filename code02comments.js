import React, { Component } from "react";

/*
 STEP 1: Define types for props and state.
 In this example, the component has NO props, so we use {}.
 The state contains "count", which is a number.
*/
interface CounterProps {} // no props
interface CounterState {
  count: number; // state variable type
}

/*
 STEP 2: Add types to the class:
 Component<propsType, stateType>
*/
class Counter extends Component<CounterProps, CounterState> {
  /*
   STEP 3: Initialize the typed state.
   We must explicitly type the state in TypeScript.
  */
  state: CounterState = {
    count: 0,
  };

  /*
   STEP 4: Type the function.
   TS automatically understands `increment` returns void.
  */
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>

        {/* STEP 5: onClick automatically expects a function with no arguments */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

