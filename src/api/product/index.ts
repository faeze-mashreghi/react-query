import request from "../index";
import { url } from "../../model/apiUrl";

export const getProduct = async () => {
  const { data: data } = await request.get(url.getProduct);
  return data;
};
