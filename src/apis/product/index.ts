import request from "../config";
import { url } from "../../model/apiPath";

export const getProduct = async () => {
  const { data: data } = await request.get(url.getProduct);
  return data;
};
