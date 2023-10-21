import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key='general' pageSize={5} country='in' category='general' />} />
          <Route exact path='/Business' element={<News key='business' pageSize={5} country='in' category='business' />} />
          <Route exact path='/Entertainment' element={<News key='entertainment' pageSize={5} country='in' category='entertainment' />} />
          <Route exact path='/Health' element={<News key='health' pageSize={5} country='in' category='health' />} />
          <Route exact path='/Science' element={<News key='science' pageSize={5} country='in' category='science' />} />
          <Route exact path='/Sports' element={<News key='sports' pageSize={5} country='in' category='sports' />} />
          <Route exact path='/Technology' element={<News key='technology' pageSize={5} country='in' category='technology' />} />
        </Routes>
        </Router>
      </div>
    )
  }
}