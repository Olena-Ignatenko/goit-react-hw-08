import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

// Валідація за допомогою Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters!")
    .max(50, "Must be 50 characters or less!")
    .required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const RegistrationForm = () => {
    const dispatch = useDispatch();
  const handleSubmit = (data, actions) => {
     dispatch(register(data));
    actions.resetForm();

    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
        <Form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            Name:
          </label>

          <div className={css.containerField}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Alex Doe"
            />
            <ErrorMessage
              className={css.errorSpan}
              name="name"
              component="span"
            />
          </div>
          <label className={css.label} htmlFor="email">
            Email:
          </label>

          <div className={css.containerField}>
            <Field
              className={css.input}
              type="text"
              name="email"
              placeholder="alex@patron.com"
            />
            <ErrorMessage
              className={css.errorSpan}
              name="email"
              component="span"
            />
          </div>

          <label className={css.label} htmlFor="password">
            Password:
          </label>

          <div className={css.containerField}>
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.errorSpan}
              name="password"
              component="span"
            />
          </div>

          <button type="submit" title="Click to register user">
            Sing Up
          </button>
        </Form>
      
    </Formik>
  );
};

export default RegistrationForm;
