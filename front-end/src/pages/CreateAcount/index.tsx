import React, { useEffect, useState } from "react";
import { Conatiner } from "./styles";
import { History } from "history";
import ImgCreateAcount from "../../assets/img/img-create.svg";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { GET_USERS } from "../../GraphQL/Queries";
import { CREATE_USER } from "../../GraphQL/Mutations";

type Props = {
  history: History;
};

const CreateAcount: React.FC<Props> = ({ history }) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ra, setRa] = useState<string>("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  /*   const { error, loading, data } = useQuery(GET_USERS);
  const [users, setUsers] = useState(); */

  /*Query   useEffect(() => {
    if (data) {
      setUsers(data.getUsers);
    }
  }, [data]); */

  async function handleRegister(e: React.MouseEvent) {
    e.preventDefault();
    if (name.length < 1) {
      alert("Insert a valid name.");
      return;
    }
    if (ra.length < 10) {
      alert("Insert a valid R.A.");
      return;
    }
    if (password.length < 1) {
      alert("Insert a valid password.");
      return;
    }

    createUser({ variables: { name: name, ra: ra, password: password } });
    setName("");
    setRa("");
    setPassword("");

    if (error) {
      console.log(error);
    } else {
      history.push(`/`);
    }
  }

  return (
    <Conatiner>
      <main>
        <section id="img-login">
          <img src={ImgCreateAcount} alt="Imagem da tela de login" />
        </section>
        <section id="data-user">
          <h1>UniChat</h1>
          <h1>Criar conta</h1>
          <input
            type="text"
            placeholder="Nome: ex. Reinaldo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="RA: ex. 2015232795"
            value={ra}
            onChange={(e) => setRa(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha: * * * * * * *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleRegister}>Cadastrar</button>

          <Link to="/">
            <span>Logar</span>
          </Link>
        </section>
      </main>
    </Conatiner>
  );
};

export default CreateAcount;
