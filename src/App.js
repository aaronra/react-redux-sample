import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Home from './components/Home';
import AddUser from "./components/AddUser";
import Post from "./components/Post";

class App extends Component {

  render () {
    return (
      <Router>
        <section className="App">
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/add" component={AddUser}/>
              <Route path="/:post_id" component={Post}/>
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}


export default App;
