import React from "react";
import { Link } from "react-router-dom";
import { IputColor, MessageCard } from "./styles";
import {
  BodyMensagens,
  Conatiner,
  InputText,
  ListaChats,
  LogOut,
  MenuLateral,
  Messages,
  Send,
} from "./styles";

const Home = () => {
  return (
    <Conatiner>
      <MenuLateral>
        <header>
          <h1>UniChat</h1>
        </header>
        <ListaChats>
          <h2>Salas de bate papo</h2>
          <ul>
            <li className="selected">Sistemas de Informação</li>
            <li>Educação Fisica</li>
            <li>Estética</li>
            <li>Agronomia</li>
            <li>Fisioterpia</li>
            <li>Administração</li>
            <li>Eng. Elétrica</li>
          </ul>
        </ListaChats>
      </MenuLateral>
      <BodyMensagens>
        <header>
          <h1>Sistemas de Infomação</h1>
          <Link to="/">
            <LogOut />
          </Link>
        </header>
        <Messages>
          <section>
            <MessageCard></MessageCard>
          </section>
          <IputColor>
            <InputText>
              <input type="text" />
              <Send />
            </InputText>
          </IputColor>
        </Messages>
      </BodyMensagens>
    </Conatiner>
  );
};

export default Home;
