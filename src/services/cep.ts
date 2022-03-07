import { apiCep } from './api';

export async function getCep(cep: string) {
  const { data } = await apiCep.get(`/${cep}/json`);
  return data;
}
