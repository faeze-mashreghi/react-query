import TextBox from "../../component/TextBox";
import Button from "../../component/Button";
import SelectBox from "../../component/SelectBox";
import Logic from "./logic";
import "./style.css";
import Alert from "../../component/Alert";
import { changeToSelectType } from "../../utils";

const SignupForm = () => {
  const { formik, product, isCreateProduct } = Logic();

  return (
    <form onSubmit={formik.handleSubmit} className="form-signup">
      <div className="signup-box">
        <TextBox
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          label="نام "
          invalidFeedack={formik.errors.firstName}
        />

        <TextBox
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          label="نام خانوادگی"
          invalidFeedack={formik.errors.lastName}
        />

        <TextBox
          id="mobile"
          name="mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
          label="تلفن همراه"
          invalidFeedack={formik.errors.mobile}
        />

        <TextBox
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label="پست الکترونیکی"
          invalidFeedack={formik.errors.email}
        />
        <SelectBox
          onChange={formik.handleChange}
          name="productId"
          id="productId"
          options={changeToSelectType(product!, "id", "name")}
          label="محصولات"
          value={formik.values.productId}
          invalidFeedack={formik.errors.productId}
        ></SelectBox>
        {isCreateProduct === true && <Alert variant="success" />}
        {isCreateProduct === false && <Alert variant="error" />}
        <Button type="submit" lable="ثبت" className="submit-signup" />
      </div>
    </form>
  );
};
export default SignupForm;
