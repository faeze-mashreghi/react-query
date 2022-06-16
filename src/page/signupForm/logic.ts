import { useState } from "react";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import * as Yup from "yup";
import { phoneRegExp, errorMessage } from "../../model/validation";
import { Product } from "../../api/product/type";
import { createOrder } from "../../api/order";
import { getProduct } from "../../api/product";
const Logic = () => {
  const [isCreateProduct, setIsCreateProduct] = useState<null | boolean>(null);
  const { data: product } = useQuery<Product[]>("getProduct", getProduct);

  const { mutate } = useMutation(createOrder, {
    onSuccess: () => setIsCreateProduct(true),
    onError: () => setIsCreateProduct(false),
    onMutate: () =>
      setTimeout(() => {
        setIsCreateProduct(null);
      }, 5000),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      productId: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(errorMessage.require),
      lastName: Yup.string().required(errorMessage.require),
      mobile: Yup.string()
        .matches(phoneRegExp, errorMessage.wrongMobileNumber)
        .required(errorMessage.require),
      email: Yup.string()
        .email(errorMessage.wrongEmail)
        .required(errorMessage.require),
      productId: Yup.string().required(errorMessage.require),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });
  return { formik, product, isCreateProduct };
};
export default Logic;
