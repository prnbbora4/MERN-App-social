import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import Registration from './Components/Registration'
import Logout from './Components/Logout'
import './App.css';

import {initialState, reducer} from './reducer/UseReducer'

  // contextAPI
  export const UserContext = createContext();

  const Routing = () => {
    return (
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

        <Route path="/logout">
          <Logout />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    )
  }

function App() {
  // declare useReducer for UserContext
  const [state, dispatch] = useReducer(reducer, initialState)
  // reducer and initialState is defined in useReducer.js

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        {/* for state and dispatch value we used useReducer */}

        <Navbar />
        <Routing/>

      </UserContext.Provider>

    </>
  )
}

export default App

