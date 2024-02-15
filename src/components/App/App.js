import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import './App.css';

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  function onLogout() {
    setLoggedIn(false);
    navigate('/');
  }
  function onLogin(email, password) {
    setLoggedIn(false);
    setCurrentUser({ name: currentUser.name, email: email })
    navigate('/profile');
  }
  function onRegister(name, email, password) {
    navigate('/signin');
  }
  function onPrevious() {
    navigate(-1);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                loggedIn={loggedIn}
                onLogout={onLogout}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={onLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={onRegister}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFound
                onPrevious={onPrevious}
              />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;