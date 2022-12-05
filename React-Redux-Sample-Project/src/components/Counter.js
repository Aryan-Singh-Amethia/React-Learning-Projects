import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch(); //hook returns a dispatcher function.

  const incrementHandler = () =>{ dispatch(counterActions.increment())};
  const incrementBy10Handler = () =>{ dispatch(counterActions.increase(10))};
  const decrementHandler = () =>{ dispatch(counterActions.decrement())}; 

  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const counterVisible = useSelector((state)=> state.visible);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy10Handler}>Increment By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
