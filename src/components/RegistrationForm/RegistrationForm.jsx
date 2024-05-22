import { useId } from "react";
import { useDispatch } from "react-redux";
import s from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { toast, Toaster } from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const nameFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(20, "Too Long!"),
    //   .required("Required"),
    email: Yup.string().email("Invalid email"),
    password: Yup.string()
      .min(8, "Minimum 8 characters!")
      .max(20, "The maximum 20 characters!"),
    //   .required("Required"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    if (!values && values.length === 0) {
      console.log(123);

      return;
    }
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => actions.resetForm())
      .catch(() =>
        toast.error("All fields are required!", {
          icon: "😕",
          position: "top-right",
          style: {
            backgroundColor: "#8ba162",
            color: "black",
          },
        })
      );
  };

  return (
    <div className={s.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.wrap}>
            <label htmlFor={nameFieldId}>Username</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Please write a name..."
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
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
            <p>Already have an account? Let is login!</p>
            <NavLink className={s.link} to="/login">
              Log in
            </NavLink>
          </div>

          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
