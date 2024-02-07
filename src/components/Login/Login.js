import React from "react";

import Logo from "../Logo/Logo";
import Form from "../Form/Form";

import "./login.css";
import "./login__logo.css";


export default function Login({ onLogin, buttonText }) {
  const tempErr = false;
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLoginChange(e) {
    setLogin(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(login, password);
  }

  return (
    <section className="login">
      <Logo name="Login"></Logo>
      <Form name="Login"
        title="Рады видеть!"
        onSubmit={handleSubmit}
        buttonText={"Войти"}
        subText="Ещё не зарегистрированы?"
        pageLink="/signup"
        linkText="Регистрация" >
        <p className="form__clue">E-mail</p>
        <input
          type="email"
          className="form__input"
          placeholder="E-mail"
          id="inputSigninLogin"
          name="inputSigninLogin"
          minLength="2"
          maxLength="40"
          value={login}
          onChange={handleLoginChange}
          required
        />
        <p className="form__clue">Пароль</p>
        <input
          type="password"
          className="form__input"
          placeholder="Пароль"
          id="inputSigninPassword"
          name="inputSigninPassword"
          minLength="2"
          maxLength="200"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span className={`form__error ${tempErr ? "form__error_active" : ""}`}>Что-то пошло не так...</span>
      </Form>
    </section>
  );
}
