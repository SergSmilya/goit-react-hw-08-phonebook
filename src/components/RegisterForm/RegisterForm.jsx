import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function RegisterForm() {
  return (
    <div>
      <h1>Sign Up</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="Name">Name</label>
            <Field id="Name" name="name" placeholder="Jane" autoFocus />
            <ErrorMessage component="div" name="name" />

            <label htmlFor="Email">Email</label>
            <Field
              id="Email"
              type="email"
              name="email"
              placeholder="jane@acme.com"
            />
            <ErrorMessage component="div" name="email" />

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" />
            <ErrorMessage component="div" name="password" />

            <button type="submit">Registration</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
