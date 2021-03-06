import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/pages/Home';
import Login from '../views/pages/Login';

const Routes:React.FC = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
    )
}

export default  Routes