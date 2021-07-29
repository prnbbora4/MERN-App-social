import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import Registration from './Components/Registration'
import './App.css';

function App() {
  return (

      <>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>

      </>
  )
}

export default App

