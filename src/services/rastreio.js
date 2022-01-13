import { apiCorreios } from './api';

export async function getRastreio(trackingCode) {
  const { data } = await apiCorreios.get(`/${trackingCode}`);
  return data;
}
