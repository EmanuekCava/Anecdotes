import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import Header from './app/components/header/header'

import Index from './app/routes/index.routes'
import Anecdotes from './app/routes/anecdotes.routes';
import CreateAnecdote from './app/routes/create.routes';
import Anecdote from './app/routes/anecdote.routes'
import MyAnecdotes from './app/routes/myanecdotes.routes'
import Profile from './app/routes/profile.routes';

import Error from './app/routes/error.routes'

import store from './app/store'

function App() {

  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header setShowSignIn={setShowSignIn} showSignIn={showSignIn} setShowSignUp={setShowSignUp} showSignUp={showSignUp} />
        <Routes>
          <Route path="/" element={<Index showSignIn={showSignIn} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />} />
          <Route path="/anecdotes" element={<Anecdotes />} />
          <Route path="/share" element={<CreateAnecdote />} />
          <Route path="/anecdotes/:id" element={<Anecdote />} />
          <Route path="/myanecdotes" element={<MyAnecdotes />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
