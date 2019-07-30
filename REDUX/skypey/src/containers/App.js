import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './App.css';
import store from '../store'

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={contacts.contacts} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
