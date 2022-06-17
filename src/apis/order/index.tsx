import request from "../config";
import { Order } from "./type";
import { url } from "../path";
export const createOrder = async (data: Order) => {
  const { data: response } = await request.post(url.createOrder, data);
  return response.data;
};
