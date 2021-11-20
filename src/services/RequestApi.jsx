import axios from "axios";

export const catchLotteries = async () => {
  try {
    const { data } = await axios.get(
      "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const catchLotteriesContents = async () => {
  try {
    const { data } = await axios.get(
      "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const contestsById = async(id) => {
  try {
    const { data } = await axios.get(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`
    );
    return data;
  } catch (error) {
    // throw new Error(error);
  }
};
