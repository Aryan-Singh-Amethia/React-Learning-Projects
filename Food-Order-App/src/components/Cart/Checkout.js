import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const Checkout = (props) => {
  const nameInputRef = useRef();
  const stateInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
   
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    props.onConfirm({
        name : enteredName ,
        street : enteredState ,
        city : enteredCity ,
        postalCode : enteredPostalCode
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={stateInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;