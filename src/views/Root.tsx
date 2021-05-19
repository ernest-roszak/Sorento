import { Switch, Route } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import SingIn from 'components/molecules/SignIn/SignIn';
import PrivateRoute from 'components/PrivateRoute';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useAuth } from 'hooks/useAuth';

function Root() {
  const { currentUser }: any = useAuth();
  return (
    <MainTemplate>
      <Switch>
        <Route path="/login">
          <SingIn />
        </Route>
        <PrivateRoute currentUser={currentUser} component={Dashboard} path="/dashboard" />
      </Switch>
    </MainTemplate>
  );
}

export default Root;
