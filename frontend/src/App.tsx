import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import LogoutPage from "./components/Login/LogoutPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login/">
                        <LoginPage />
                    </Route>
                    <Route path="/logout/">
                        <LogoutPage />
                    </Route>
                    <PrivateRoute>
                        <Route exact path="/">
                            <HomePage></HomePage>
                        </Route>
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
