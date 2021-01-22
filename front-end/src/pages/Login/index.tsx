import React from "react";
import { Conatiner } from "./styles";
import ImgLogo from "../../assets/img/img-login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Conatiner>
      <main>
        <section id="data-user">
          <h1>UniChat</h1>
          <input type="text" placeholder="R.A. ex: 2015232795" />
          <input type="text" placeholder="* * * * * * *" />
          <Link to="/home">
            <button>Entrar</button>
          </Link>
        </section>
        <section id="img-login">
          <img src={ImgLogo} alt="Imagem da tela de login" />
        </section>
      </main>
    </Conatiner>
  );
};

export default Login;
