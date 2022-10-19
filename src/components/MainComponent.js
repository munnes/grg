

import React, { useEffect, useState, useRef } from "react";

import { Routes, Route, Navigate, withRouter } from "react-router-dom";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

const Main = () => {

    return(
        <div>
    <Header/>
    <Home/>
        <Footer />
        </div>
    )
}

export default Main