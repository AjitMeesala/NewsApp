import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import 'dotenv/config';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key='general' pageSize={this.pageSize} country='us' category='general' />} />
          <Route exact path='/Business' element={<News key='business' pageSize={this.pageSize} country='us' category='business' />} />
          <Route exact path='/Entertainment' element={<News key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />} />
          <Route exact path='/Health' element={<News key='health' pageSize={this.pageSize} country='us' category='health' />} />
          <Route exact path='/Science' element={<News key='science' pageSize={this.pageSize} country='us' category='science' />} />
          <Route exact path='/Sports' element={<News key='sports' pageSize={this.pageSize} country='us' category='sports' />} />
          <Route exact path='/Technology' element={<News key='technology' pageSize={this.pageSize} country='us' category='technology' />} />
        </Routes>
        </Router>
      </div>
    )
  }
}