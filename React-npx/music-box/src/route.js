import React from 'react';
import Index from '../src/pages/Index';
import {BrowserRouter as Routers, Switch, Route} from 'react-router-dom';
import Music from './pages/Music';
import AddMusic from './pages/AddMusic';
import NotFound from './pages/NotFound';

function Routes(){
    return(
        <Routers>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/music" component={Music} />
                <Route path="/add-music" component={AddMusic} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </Routers>
    );
}

export default Routes;