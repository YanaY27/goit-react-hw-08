import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "../../redux/contacts/contactsOps";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^([A-Za-z]+(\s[A-Za-z]+)?)$/, "Name can only contain letters")
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Please write a name"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Number can only contain numbers")
    .min(3, "Too short")
    .max(20, "Too long")
    .required("Please write a number"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValue = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));

    actions.resetForm();
  };
  const nameId = useId();
  const numberId = useId();

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div>
            <label htmlFor={nameId} className={s.name}>
              Name
            </label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="span" className={s.err} />
          </div>

          <div>
            <label htmlFor={numberId} className={s.number}>
              Number{" "}
            </label>
            <Field type="tel" name="number" id={numberId}></Field>
            <ErrorMessage name="number" component="span" className={s.err} />
          </div>

          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
