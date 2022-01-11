import api from "./api";

export async function getRastreio(trackingCode) {
  const { data } = await api.get(`/${trackingCode}`)
  return data;
}