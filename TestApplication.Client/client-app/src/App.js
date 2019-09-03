import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Cars from './containers/Cars/Cars';
import Help from './containers/Help/Help';

const App = props => {

    const routes = (
        <Switch>
            <Route path='/help' exact component={Help}></Route>
            <Route path='/cars' exact component={Cars}></Route>
            <Redirect to='/'></Redirect>
        </Switch>
    );

    return (<Fragment>
        <Navigation></Navigation>
        <main className="App container">
            {routes}
        </main>
    </Fragment>
    );
}

export default App;
