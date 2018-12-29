import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AppList from './components/AppList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <AppList/>
      </div>
    );
  }
}

export default App;
