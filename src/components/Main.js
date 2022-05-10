import React from 'react';

import {Switch, Route} from 'react-router-dom';

import {AllUsers} from './AllUsers';
import {UpdateUser} from './UpdateUser';
import {AddUser} from './AddUser';
import {DeleteUser} from "./DeleteUser";
import {Login} from "../auth/authscreens/Login";

const Main = () => {
    return (
        <Switch>
            <Route exact path='/add-user' component={AddUser}></Route>
            <Route exact path='/all-users' component={AllUsers}></Route>
            <Route exact path='/update-user' component={UpdateUser}></Route>
            <Route exact path='/delete-user' component={DeleteUser}></Route>
            <Route exact path='/login' component={Login}></Route>
        </Switch>
    );
}

export {Main};
