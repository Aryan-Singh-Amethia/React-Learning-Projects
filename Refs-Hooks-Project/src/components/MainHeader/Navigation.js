import React , {useContext} from 'react';
import AuthContext from '../Store/AuthContext';

import classes from './Navigation.module.css';

const Navigation = (props) => {

  const ctx = useContext(AuthContext);
  return (
                <nav className={classes.nav}>
                   <ul>
                     {ctx.isLoggedIn && (
                       <li>
                         <a href="/">Users</a>
                       </li>
                     )}
                     {props.isLoggedIn && (
                       <li>
                         <a href="/">Admin</a>
                       </li>
                     )}
                     {props.isLoggedIn && (
                       <li>
                         <button onClick={ctx.logoutHandler}>Logout</button>
                       </li>
                     )}
                   </ul>
                 </nav>
  );
};

export default Navigation;
