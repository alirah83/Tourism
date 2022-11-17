import React from 'react';
//import ReactDOM from 'react-dom/client';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import SectionAbout from './Components/SectionAbout';
import SectionFeature from './Components/SectionFeature';
import SectionTours from './Components/SectionTours';
import SectionStories from './Components/SectionStories';
import SectionBook from './Components/SectionBook';
import Footer from './Components/Footer';
import Popup from './Components/Popup';

class App extends React.Component {
  render(){
      return(
      <React.Fragment>
        <Navigation />
        <Header />
        <SectionAbout />
        <SectionFeature />
        <SectionTours />
        <SectionStories />
        <SectionBook />
        <Footer />
        <Popup />
      </React.Fragment>
      );
   }
}  

export default App;