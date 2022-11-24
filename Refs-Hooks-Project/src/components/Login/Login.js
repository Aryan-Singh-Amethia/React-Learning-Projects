import React, { useState , useRef , useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input';

const emailReducer = (state , action) =>{

  if(action.type === 'USER_INPUT'){
    return { value : action.val , isValid : action.val.includes('@') };
  }

  if(action.type === 'INPUT_BLUR'){
    return { value : state.val , isValid : state.val.includes('@')};
  }
    return { value : '' , isValid : false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState , dispatchEmail] = useReducer(emailReducer,
                                                { value : '', isValid : false},
                                                );

  const emailInputRef = useRef();
  const passwordInputRef =  useRef();                                              

  // useEffect(()=>{
  //   const identifier = setTimeout(()=>{
  //     console.log('Checking form validity.');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   },500);

  //   return ()=>{
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   }

  // },[enteredEmail,enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type : 'USER_INPUT' , val : event.target.value});
   // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.value.includes('@')
    );
  };

  const validateEmailHandler = () => {
   // setEmailIsValid(emailState.isValid);
   dispatchEmail({type : 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      props.onLogin(emailState.value, enteredPassword);
    }else if(!emailState.isValid){
      emailInputRef.current.activate();
    }else{
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email"
            label="E-Mail" 
             type="email"
             ref={emailInputRef}
          isValid={emailState.isValid}
            value={emailState.value}
        onChange={emailChangeHandler}
          onBlur={validateEmailHandler}/>

        <Input id="password"
            label="Password" 
             type="password"
             ref={passwordInputRef}
          isValid={passwordIsValid}
            value={enteredPassword}
        onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
