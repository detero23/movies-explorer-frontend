import React from "react";
// import green_logo from "../../images/green-logo.svg";

import Logo from "../Logo/Logo";
import Form from "../Form/Form";

import "./register.css";
import "./register__logo.css";

export default function Register({ onRegister, buttonText }) {
  const tempErr = true;
  const [name, setName] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLoginChange(e) {
    setLogin(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`name: ${name} ,login: ${login} ,password: ${password}`)
    // onRegister(login, password);
  }

  return (
    <section className="register">
      <Logo name="Register"></Logo>
      <Form name="Register"
        title="Добро пожаловать!"
        onSubmit={handleSubmit}
        buttonText={"Зарегистрироваться"}
        subText="Уже зарегистрированы?"
        pageLink="/signin"
        linkText="Войти" >
        <p className="form__clue">Имя</p>
        <input
          type="text"
          className="form__input"
          placeholder="Имя"
          id="inputSignupName"
          name="inputSignupName"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
          required
        />
        <p className="form__clue">E-mail</p>
        <input
          type="email"
          className="form__input"
          placeholder="E-mail"
          id="inputSignupLogin"
          name="inputSignupLogin"
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
          id="inputSignupPassword"
          name="inputSignupPassword"
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
