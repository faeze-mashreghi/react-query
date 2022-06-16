import request from "../index";
import { Order } from "./type";
import { url } from "../../model/apiUrl";
export const createOrder = async (data: Order) => {
  const { data: response } = await request.post(url.createOrder, data);
  return response.data;
};
