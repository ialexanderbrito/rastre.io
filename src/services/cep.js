import { apiCep } from './api';

export async function getCep(cep) {
  const { data } = await apiCep.get(`/${cep}/json`);
  return data;
}
