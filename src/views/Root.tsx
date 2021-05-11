import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { auth } from '../firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import SingIn from 'components/molecules/SignIn/SignIn';
import firebase from 'firebase';
import PrivateRoute from 'components/PrivateRoute';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

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
        <MainTemplate>
          <Switch>
            <Route path="/login">
              <SingIn />
            </Route>
            <PrivateRoute currentUser={currentUser} component={Dashboard} path="/dashboard" />
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
