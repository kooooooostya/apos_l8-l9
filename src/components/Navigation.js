import React from 'react';

import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Users spa</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/all-users'>All Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/add-user'>Add user</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/update-user'>Update User</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/delete-user'>Delete User</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to='/login'>Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>


    );
}

export {Navigation};
