import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f6f6f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  main {
    width: 800px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14),
      0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);

    section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    #data-user {
      background: #0069ab;
      border-radius: 4px 0px 0px 4px;
      h1 {
        color: #fff;
        margin-bottom: 30px;
        font-size: 24px;
      }

      input {
        margin-bottom: 30px;
        width: 70%;
        height: 40px;
        border: none;
        border-radius: 4px;
        text-align: center;
      }

      a {
        width: 70%;
        height: 40px;
        button {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 4px;
          background: #f68420;
          text-transform: uppercase;
          font-weight: bold;
          color: #fff;

          :hover {
            opacity: 0.8;
          }
        }
      }
    }

    #img-login {
      background: #fff;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;
