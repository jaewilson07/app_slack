import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './state/state-provider';

import './App.scss';
import Header from './components/header/Header.component';
import Sidebar from './components/sidebar/Sidebar.component';
import Chat from './components/chat/Chat.component';
import Login from './components/login/login.component';

function App() {
  const [{ currentUser }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="root">
        {!currentUser ? (
          <Login />
        ) : (
          <div className="app">
            <div className="app__header">
              <Header />
            </div>
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
