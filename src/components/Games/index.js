import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #efefef;
`;

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 650px;
  position: relative;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Select = styled.select`
  position: absolute;
  top: 60px;
  left: 60px;
  padding: 5px;
  border: none;
  width: 180px;
  height: 45.2px;
  outline: 0;
  border-radius: 5px;
  background-color: #fff;
  font-size: 1em;
`;

export const ContainerGame = styled.div`
  flex: 1;
`;

export const ContaineTypeGame = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    color: white;
    text-transform: uppercase;
    font-family: Montserrat;
    margin: 20px;
    font-size: 30px;
  }

  div {
    display: flex;
    margin-left: 50px;
  }
`;
