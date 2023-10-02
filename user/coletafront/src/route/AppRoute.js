import React, { Component, Fragment } from 'react';
import {Router, Route, Routes} from "react-router";
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/login" Component={UserLoginPage} />
            </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
