// import in node syntax:
const redux = require("redux");

// Default value is {counter: 0}
const counterReducer = (state = { counter: 0 }, action) => {
  // Should be a pure function: same input leads to same output.
  // Return new state object.
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state.counter);
};

// When the store state value changes, the counterSubscriber function will be executed.
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
