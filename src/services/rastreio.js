import { apiCorreios } from './api';

export async function getRastreio(trackingCode) {
  const { data, status } = await apiCorreios.get(`/${trackingCode}`);
  return { data, status };
}
