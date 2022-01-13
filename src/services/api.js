import axios from 'axios';

const apiCorreios = axios.create({
  baseURL: `https://proxyapp.correios.com.br/v1/sro-rastro/`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:36.0) Gecko/20100101 Firefox/36.0',
  },
});

const apiCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`,
});

export { apiCorreios, apiCep };
