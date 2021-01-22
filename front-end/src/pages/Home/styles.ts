import styled from "styled-components";
import { BiLogOut, BiSend } from "react-icons/bi";

export const Conatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100vw;
  height: 100vh;
  background: #f6f6f6;

  header {
    height: 9vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
    padding: 0px 40px;
  }
`;

export const MenuLateral = styled.div`
  width: 100%;
  height: 100vh;
  background: #0069ab;
  left: 0;

  h1 {
    color: #ebebeb;
  }
`;

export const BodyMensagens = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ListaChats = styled.div`
  padding: 30px 40px;

  .selected {
    background: #fff;
    border-radius: 4px;
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
  }
`;

export const LogOut = styled(BiLogOut)`
  width: 30px;
  height: 30px;
  color: #ff1f00;

  :hover {
    opacity: 0.8;
  }
`;

export const Send = styled(BiSend)`
  width: 10%;
  height: 100%;
  color: #f0f0f0;

  :hover {
    opacity: 0.8;
  }
`;

export const Messages = styled.div`
  width: 100%;
  height: 91vh;

  section {
    height: 88%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const InputText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #c0c0c0;
  border-radius: 4px;
  padding: 10px;

  input {
    width: 90%;
    height: 100%;
    border: none;
    background: #c0c0c0;
    padding: 0 16px;
    font-weight: 500;
  }
`;

export const IputColor = styled.div`
  padding: 20px 30px 30px;
  width: 100%;
  height: 12%;
`;

export const MessageCard = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: #c36746;
`;
