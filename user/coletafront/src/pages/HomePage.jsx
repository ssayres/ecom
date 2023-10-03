import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import axios from 'axios';

class HomePage extends Component {

  componentDidMount(){
    this.GetVisitorDetails();
  }

  GetVisitorDetails=()=>{
    axios.get(AppURL.VisitorDetails).then().catch()
  }

  render() {
    return (
      <Fragment>
        <NavMenuMobile/>
        <HomeTop/>
        <FeaturedProducts/>
        <NewArrival/>
        <Collection/>
        <Categories/>
      </Fragment>
    );
  }
}

export default HomePage;
