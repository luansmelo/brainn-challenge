import { useEffect, useState } from "react";

import {
  Container,
  ChildContainer,
  Select,
  ContainerGame,
  ContaineTypeGame,
  ContainerBalls,
  ContainerLogo,
  ContainerConcurso,
} from ".";
import { ChangeColors } from "../../services/Colors";
import {
  fetchLotteries,
  fetchLotteriesContents,
  contestsById,
} from "../../services/RequestApi";

const Games = () => {
  const [lottery, setLoterry] = useState([]);
  const [contents, setContents] = useState([]);
  const [content, setContent] = useState({
    data: null,
    id: 0,
    numeros: [],
  });
  const [game, setGame] = useState(null);
  const [color, setColor] = useState(0);
  const [name, setName] = useState("tente a sorte");

  useEffect(() => {
    handleGetLotteries();
    handleGetLotteriesContents();
  }, [color]);

  useEffect(() => {
    const concurso = contents?.filter(
      (value) => value.loteriaId === Number(game)
    );
    if (concurso) {
      const tempConcursoId = concurso?.[0]?.concursoId;
      handleGetContestsById(tempConcursoId);
    }
  }, [game]);

  useEffect(() => {}, [content]);

  const handleChange = (e) => {
    setColor(ChangeColors[e.target.value]);
    setGame(e.target.value);

    const games = lottery.filter((v) => v.id === Number(e.target.value));
    setName(games[0].nome);
  };

  const handleGetLotteries = async () => {
    const response = await fetchLotteries();
    setLoterry(response);
  };

  const handleGetLotteriesContents = async () => {
    const response = await fetchLotteriesContents();
    setContents(response);
  };

  const handleGetContestsById = async (id) => {
    const response = await contestsById(id);
    setContent(response);
  };

  const data = content?.data ? new Date(content?.data) : new Date();
  const formatData = data?.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  return (
    <Container style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: 0 }}>
        <svg
          width="600px"
          viewBox="0 0 745 815"
          fill="blue"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M630 0C630 0 440.26 401.011 630 812H0V0H690Z" fill={color} />
        </svg>
      </div>
      <ChildContainer>
        {
          <Select onChange={(e) => handleChange(e)} value={game} name="game">
            <option hidden>escolha um jogo</option>
            {lottery.map(({ id, nome }) => {
              return (
                <option key={id} id={id} value={id}>
                  {nome}
                </option>
              );
            })}
          </Select>
        }
        <ContaineTypeGame>
          <ContainerLogo>
            <img src="logo.svg" alt="" />
            <h1>{name}</h1>
          </ContainerLogo>
        </ContaineTypeGame>

        <ContainerConcurso>
          <h3>
            {content?.id ? (
              <div>
                <p>CONCURSO</p>
                {content?.id} - {formatData}{" "}
              </div>
            ) : null}
          </h3>
        </ContainerConcurso>
      </ChildContainer>

      <ContainerGame>
        <ContainerBalls>
          <ul>
            {content?.numeros.map((numero) => (
              <li key={numero}>{numero}</li>
            ))}
          </ul>
        </ContainerBalls>
        <div>
          <p>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </p>
        </div>
      </ContainerGame>
    </Container>
  );
};

export default Games;
