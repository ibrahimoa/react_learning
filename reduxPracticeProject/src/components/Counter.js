import { Component } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    // {type: SOME_UNIQUE_ID, payload: 10}
    dispatch(counterActions.increase(10));
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class CounterClass extends Component {
  incrementCounterHandler() {
    this.props.increment();
  }

  decrementCounterHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Class-based Redux Counter</h1>
        <div className={classes.value}>{this.props.counter.counter}</div>
        <div>
          <button onClick={this.incrementCounterHandler.bind(this)}>
            Increment
          </button>
          <button onClick={this.decrementCounterHandler.bind(this)}>
            Decrement
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
  };
};

export const ConnectedCounterClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClass);

export default Counter;
