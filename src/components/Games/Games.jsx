import { useEffect, useState } from "react";

import {
  Container,
  ChildContainer,
  Select,
  ContainerGame,
  ContaineTypeGame,
} from ".";
import {
  catchLotteries,
  catchLotteriesContents,
  contestsById,
} from "../../services/RequestApi";

const Games = () => {
  const [lottery, setLoterry] = useState([]);
  const [contents, setContents] = useState([]);
  const [contentId, setContentId] = useState([]);
  const [game, setGame] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");

  const colors = {
    "mega-sena": "#6BEFA3",
    quina: "#8666EF",
    lotofácil: "#DD7AC6",
    lotomania: "#FFAB64",
    timemania: "#5AAD7D",
    "dia de sorte": "#BFAF83",
  };

  useEffect(() => {
    handleGetLotteries();
    handleGetLotteriesContents();
    handleGetContestsById();
  }, [color]);

  const handleChange = (e) => {
    setColor(colors[e.target.value]);
    setGame(e.target.value);

    for (let i = 0; i < lottery.length; i++) {
      if (e.target.value === lottery[i].nome) {
        setName(lottery[i].nome);
      }
    }
  };

  const handleGetLotteries = async () => {
    const response = await catchLotteries();
    setLoterry(response);
  };
  const handleGetLotteriesContents = async () => {
    const response = await catchLotteriesContents();
    setContents(response);
  };

  const handleGetContestsById = async (id) => {
    const response = await contestsById(id);
    setContentId(response);
  };

  // const mapGetId = contents?.filter((item) => {

  // });
  // console.log(mapGetId);

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <svg
          width="575px"
          height="100%"
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M630 0C630 0 460.26 401.011 630 800H0V0H690Z" fill={color} />
        </svg>
      </div>
      <ChildContainer>
        {
          <Select onChange={(e) => handleChange(e)} value={game} name="game">
            <option hidden>escolha um jogo</option>
            {lottery.map(({ id, nome }) => {
              return (
                <option key={id} id={id} value={nome}>
                  {nome}
                </option>
              );
            })}
          </Select>
        }
        <ContaineTypeGame>
          <div>
            <img src="logo.svg" alt="" />
            <h1>{name}</h1>
          </div>
        </ContaineTypeGame>
      </ChildContainer>

      <ContainerGame></ContainerGame>
    </Container>
  );
};

export default Games;
