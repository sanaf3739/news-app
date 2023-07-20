
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route  exact path="/" element={<News key="general" country="in" pageSize={this.pageSize} category="general"/>}></Route>
          <Route  exact path="/business" element={<News key="business" country="in" pageSize={this.pageSize} category="business"/>}></Route>
          <Route  exact path="/entertainment" element={<News key="entertainment" country="in" pageSize={this.pageSize} category="entertainment"/>}></Route>
          <Route  exact path="/health" element={<News key="health" country="in" pageSize={this.pageSize} category="health"/>}></Route>
          <Route  exact path="/science" element={<News key="science" country="in" pageSize={this.pageSize} category="science"/>}></Route>
          <Route  exact path="/sports" element={<News key="sports" country="in" pageSize={this.pageSize} category="sports"/>}></Route>
          <Route  exact path="/technology" element={<News key="technology"country="in" pageSize={this.pageSize} category="technology"/>}></Route>
        </Routes>
        </Router>
      </>
    )
  }
}


