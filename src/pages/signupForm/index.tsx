import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import Card from "../../components/Card/Card";
import SelectBox from "../../components/SelectBox/SelectBox";

import { SelectOption } from "../../models/interfaces";
import { SingleValue } from "react-select";
import { changeToSelectType } from "../../utils";

import Logic from "./logic";
import "./style.scss";
const SignupForm = () => {
  const { formik, product, isCreateProduct } = Logic();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <div className="signup-box">
          <TextBox
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            label="name"
            invalidFeedack={formik.errors.firstName}
          />

          <TextBox
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            label=" last name"
            invalidFeedack={formik.errors.lastName}
          />

          <TextBox
            id="mobile"
            name="mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            label="mobile "
            invalidFeedack={formik.errors.mobile}
          />

          <TextBox
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            label="email "
            invalidFeedack={formik.errors.email}
          />
          <SelectBox
            onChange={(option: SingleValue<SelectOption>) =>
              formik.setFieldValue("productId", option?.value)
            }
            onBlur={formik.handleBlur}
            name="productId"
            id="productId"
            options={changeToSelectType(product!, "id", "name")}
            label="product"
            value={formik.values.productId}
            invalidFeedack={formik.errors.productId}
          />
          {isCreateProduct === true && <Alert variant="success" />}
          {isCreateProduct === false && <Alert variant="error" />}
          <Button
            type="submit"
            lable="save"
            className="submit-signup"
            size="large"
          />
        </div>
      </Card>
    </form>
  );
};
export default SignupForm;
