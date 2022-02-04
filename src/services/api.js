import axios from 'axios';

const apiCorreios = axios.create({
  baseURL: `https://thingproxy.freeboard.io/fetch/https://proxyapp.correios.com.br/v1/sro-rastro/`,
});

const apiCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`,
});

export { apiCorreios, apiCep };
