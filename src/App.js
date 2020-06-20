import React from 'react';
import './App.css';
import NavBar from './components/navFolder/NavBar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/homeFolder/Homepage';
import RoomsPage from './components/roomsFolder/RoomsPage'
import Room from './components/roomsFolder/Room'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/rooms' component={RoomsPage} />
        <Route path='/rooms/:roomId' component={Room} />
      </Switch>
    </div>
  );
}

export default App;
