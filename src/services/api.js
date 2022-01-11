import axios from 'axios';

const api = axios.create({
  baseURL: `https://thingproxy.freeboard.io/fetch/https://proxyapp.correios.com.br/v1/sro-rastro/`,
});

export default api;