import axios from 'axios';

const apiCorreios = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/`,
});

const apiCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`,
});

export { apiCorreios, apiCep };
