import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { auth } from '../firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import SingIn from 'components/SignIn';
import firebase from 'firebase';
import PrivateRoute from 'components/PrivateRoute';

function Root() {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <SingIn />
            </Route>
            <PrivateRoute currentUser={currentUser} component={Dashboard} path="/dashboard" />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
