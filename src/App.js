import React from 'react';
import './App.css';
import NavBar from './components/navFolder/Nav'
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/homeFolder/Homepage';
import RoomsPage from './components/roomPage-folder/RoomsPage'
import Room from './components/room-folder/Room'
import Contact from './components/Contact'
import Footer from './components/footerFolder/Footer'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/rooms' component={RoomsPage} />
        <Route path='/rooms/:roomId' component={Room} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
