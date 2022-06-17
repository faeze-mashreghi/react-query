import request from "../config";
import { url } from "../path";

export const getProduct = async () => {
  const { data: data } = await request.get(url.getProduct);
  return data;
};
