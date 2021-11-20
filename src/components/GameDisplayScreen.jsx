import { useEffect, useState } from "react";
import { Container, ChildContainer, Select } from ".";
import {
  catchLotteries,
  catchLotteriesContents,
} from "../../services/RequestApi";

const Games = () => {
  const [game, setGame] = useState("");
  const [lottery, setLoterry] = useState([]);
  const [contents, setContents] = useState([]);

  const [color, setColor] = useState("");
  const colors = {
    "mega-sena": "#6BEFA3",
    quina: "#8666EF",
    lotofácil: "#DD7AC6",
    lotomania: "#FFAB64",
    timemania: "#5AAD7D",
    "dia de sorte": "#BFAF83",
  };

  const handleChange = (e) => {
    setColor(colors[e.target.value]);
    setGame(e.target.value);
  };

  const handleGetLotteries = async () => {
    const response = await catchLotteries();
    setLoterry(response);
  };
  const handleGetLotteriesContents = async () => {
    const response = await catchLotteriesContents();
    setContents(response);
  };

  useEffect(() => {
    handleGetLotteries();
    // handleGetLotteriesContents();
  }, [color]);

  console.log(lottery);

  return (
    <Container>
      <ChildContainer
        style={{ backgroundColor: color, transition: "all 0.25s linear" }}
      >
        {
          <div>
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
            <div>
              
            </div>
          </div>
        }
      </ChildContainer>
    </Container>
  );
};

export default Games;
