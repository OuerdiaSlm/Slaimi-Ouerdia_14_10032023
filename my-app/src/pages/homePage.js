import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer'
import Form from '../components/form/form';

function Homepage() {
  return (
    <div className="globalDivHomepage">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  )
}
export default Homepage;