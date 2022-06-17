import { useState } from "react";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import * as Yup from "yup";
import { phoneRegExp, errorMessage } from "../../models/validation";
import { Product } from "../../apis/product/type";
import { createOrder } from "../../apis/order";
import { getProduct } from "../../apis/product";
const Logic = () => {
  const [isCreateProduct, setIsCreateProduct] = useState<null | boolean>(null);
  const { data: product } = useQuery<Product[]>("getProduct", getProduct);

  const { mutate } = useMutation(createOrder, {
    onSuccess: () => {
      setIsCreateProduct(true);
      formik.resetForm();
    },
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
