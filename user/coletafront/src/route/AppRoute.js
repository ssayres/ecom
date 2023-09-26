import React, { Component, Fragment } from 'react';
import {Router, Route, Routes} from "react-router";
import HomePage from '../pages/HomePage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
            <Routes>
                <Route path="/" Component={HomePage} />
            </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
