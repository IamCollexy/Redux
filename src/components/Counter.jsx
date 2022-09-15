import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { counterActions } from '../Store/CounterSlice';

const Counter = () => {

const dispatch = useDispatch();

const counter =  useSelector(state => state.counter.counter);

const show = useSelector(state => state.counter.showCounter);

const IncrementHandler = ( ) => {
  dispatch(counterActions.increment());
};

const DecrementHandler = ( ) => {
  dispatch(counterActions.decrement());
};

const IncreaseHandler = ( ) => {
  dispatch(counterActions.increaseBy5(5)); // { type: }
};

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (

    <main className={classes.counter}>

      <h1>Redux Counter</h1>

     {show && <div className={classes.value}>{counter}</div>}
    
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={IncreaseHandler}>Increase by 5</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    
    </main>
  );
};

export default Counter;


// import classes from './Counter.module.css';
// import {Component} from 'react';
// import {connect} from 'react-redux';

// class Counter extends Component {
  //to initialize State
// constructor( ) {
// }
// IncrementHandler = () => {
//   this.props.increment();
// }
// DecrementHandler = () => {
//   this.props.decrement();
// }
// toggleCounterHandler = () => {

// }

// render() {
//   return (
//     <main className={classes.counter}>
//            <h1>Redux Counter</h1>
//            <div className={classes.value}>{this.props.counter}</div>      
//          <div>
//              <button onClick={this.IncrementHandler.bind()}>Increment</button>
//              <button onClick={this.DecrementHandler.bind()}>Decrement</button>
//            </div>
//            <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//          </main>
//   )
// }
// };

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
// increment: () => dispatch({ type: 'increment'}),
// decrement: () => dispatch({ type: 'decrement'}),
//   }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);