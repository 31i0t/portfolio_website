import React, { useState } from 'react';
import Header from './globalComponents/Header';
import Projects from './projectsPage/Projects'
import Experience from './experiencePage/Experience'
import Footer from './globalComponents/Footer'
import Questions from './globalComponents/Questions'
import Title from './globalComponents/Title'
import References from './referencesPage/References';
import Education from './educationPage/Education';


import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

function Main() {

  return (
    <HashRouter>
      <main>
        <Header />
        <div id = "content">
          <Route exact path="/" component={Projects}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/references" component={References}/>
          <Route path="/education" component={Education}/>
        </div>
        <Title title={"Questions for me?"}/>
        <Questions/>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default Main;
