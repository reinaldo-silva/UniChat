import styled from "styled-components";
import { BiLogOut, BiSend } from "react-icons/bi";

export const Conatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100vw;
  height: 100vh;
  background: #f6f6f6;

  header {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
    padding: 0px 40px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

/* Menu Lateral ============================= */
export const MenuLateral = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  background: #0069ab;
  left: 0;
  margin-top: 55px;

  h1 {
    color: #ebebeb;
  }

  header {
    width: 25%;
    background: #0069ab;
  }
`;

export const ListaChats = styled.div`
  overflow-x: auto;
  padding: 30px 0px 30px 40px;
  height: calc(100vh - 55px);
  width: 100%;

  .selected {
    background: #f6f6f6;
    border-radius: 8px 0px 0px 8px;
    color: #1f1f1f;
  }

  h2 {
    color: #ebebeb;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  ul li {
    font-weight: 600;
    font-size: 16px;
    list-style: none;
    padding: 16px;
    color: #ebebeb;
    margin-bottom: 4px;
    transition: 0.2s;

    :hover {
      background: #f6f6f6;
      border-radius: 8px 0px 0px 8px;
      color: #1f1f1f;
    }
  }
`;

/* Body mensagens =====================================*/
export const BodyMensagens = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  margin-top: 55px;

  header {
    width: 75%;
    margin-left: 25%;
  }
`;

/* Lista de mensagens ===================================== */
export const Messages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

  section {
    min-height: calc(100vh - 110px);
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 55px;
    overflow-y: scroll;
  }
`;

/* Card Message */
export const MessageCard = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px;
`;

export const UserDataMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: auto;
  margin: 0px;
  flex-direction: row;
  margin-bottom: 8px;
  overflow-y: hidden;

  h4 {
    color: #f68420;
    margin-right: 8px;
  }

  span {
    font-size: 8px;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: auto;
`;

/* input Text message =========================================== */
export const IputColor = styled.div`
  padding: 0px 20px 15px;
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const InputText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #e4e4e4;
  border-radius: 4px;
  padding: 10px;

  input {
    width: 90%;
    height: 100%;
    border: none;
    background: #e4e4e4;
    padding: 0 16px;
    font-weight: 500;
  }
`;

/* Icones ======================================== */
export const LogOut = styled(BiLogOut)`
  width: 30px;
  height: 30px;
  color: #ff1f00;

  :hover {
    opacity: 0.8;
  }
`;

export const Send = styled(BiSend)`
  width: 30px;
  height: 100%;
  color: #0069ab;

  :hover {
    opacity: 0.8;
  }
`;
