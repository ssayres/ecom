import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import UserLogin from "../components/common/UserLogin";


class UserLoginPage extends Component {

  render() {
    return (
      <Fragment>
      <div className="Desktop">
      <NavMenuDesktop/>
      </div>
      <UserLogin/>
      </Fragment>
    );
  }
}

export default UserLoginPage;
