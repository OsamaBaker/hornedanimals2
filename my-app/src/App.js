import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



class App extends React.Component {
  render(){
    return(
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}


export default App;