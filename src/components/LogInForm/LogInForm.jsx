import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function LogInForm() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>LogIn</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LogInSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(logIn(values));
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="Email">Email</label>
          <Field
            id="Email"
            type="email"
            name="email"
            placeholder="jane@acme.com"
            autoFocus
          />{' '}
          <ErrorMessage component="div" name="name" />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" />
          <ErrorMessage component="div" name="name" />
          <button type="submit">LogIn</button>
        </Form>
      </Formik>
    </div>
  );
}
