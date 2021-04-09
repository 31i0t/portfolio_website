import React, { useState } from 'react';
import Header from './globalComponents/Header';
import Footer from './globalComponents/Footer'
import Questions from './globalComponents/Questions'
import Title from './globalComponents/Title'
import Content from './Content'

function Main() {

  return (
    <main>
      <Header />
      <Content/>
      <Title title={"Questions for me?"}/>
      <Questions/>
      <Footer />
    </main>
  );
}

export default Main;



