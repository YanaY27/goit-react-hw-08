import { useDispatch } from "react-redux";
import s from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { NavLink } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters!")
      .max(20, "The maximum 20 characters!")
      .required("Required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.wrap}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={s.input}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Please write a email..."
            />
            <ErrorMessage className={s.error} component="span" name="email" />
          </div>
          <div className={s.wrap}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field
              className={s.input}
              type="text"
              name="password"
              id={passwordFieldId}
              placeholder="Please write a password..."
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <div className={s.login}>
            <p>If you do not have an account yet, you can register! </p>
            <NavLink className={s.link} to="/register">
              Register
            </NavLink>
          </div>

          <button className={s.btn} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
