import { Redirect, Route, RouteProps } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

const PrivateRoute = (routeProps: RouteProps) => {
    const authService = new AuthenticationService()
    if (authService.isLoggedIn()) {
        return <Route {...routeProps} />
    }
    return <Redirect to="/login/" />
}

export default PrivateRoute;
