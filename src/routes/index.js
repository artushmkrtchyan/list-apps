import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Home from '../components';
import NotFound from '../components/notFound';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/404"
                    render={(props) => <NotFound {...props} />}
                />
                <Redirect from="*" to="/404" />
            </Switch>
        </Router>
    );
};

export default Routes;