import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Cars from './containers/Cars/Cars';
import Car from './containers/Cars/Car/Car';
import Help from './containers/Help/Help';
import Home from './containers/Home/Home';

const App = props => {

    const routes = (
        <Switch>
            <Route path='/help' exact component={Help}></Route>
            <Route path='/cars' exact component={Cars}></Route>
            <Route path="/cars/:id" component={Car} />
            <Route path='/' exact component={Home}></Route>
            <Redirect to='/'></Redirect>
        </Switch>
    );

    return (<Fragment>
        <Navigation></Navigation>
        <main className="container">
            {routes}
        </main>
    </Fragment>
    );
}

export default App;
