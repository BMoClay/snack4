import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Navbar from './NavBar';
import SnackContainer from './SnackContainer';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Profile from './Profile';
import Stash from './Stash';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_RAILS_URL}/me`)
      .then(r => r.json())
      .then(user => setUser(user))
  }, [])

  return (
    <div className="App">
        <Navbar user={user} setUser={setUser}/>
        <Switch>
          <Route path="/Login">
            <LoginForm setUser={setUser}/>
          </Route>
          <Route path="/New">
            <SignUpForm setUser={setUser}/>
          </Route>
          <Route path="/Profile">
            {/* { user ? <Profile user={user} setUser={setUser}/> : <h1>You must login to see this page</h1>  } */}
            <Profile user={user} setUser={setUser}/>
          </Route>
          <Route path="/SnackContainer">
            <SnackContainer user={user}/>
          </Route>
          <Route path="/Stash">
            <Stash user={user} />
          </Route>
        </Switch>
        <Header />
    </div>
  );
}

export default App;
