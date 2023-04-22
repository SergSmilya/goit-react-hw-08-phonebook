// import { Button } from '@mui/material';
// import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';

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
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      dispatch(register(values));
    },
  });

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <LoadingButton
          loading={false}
          size="large"
          loadingPosition="start"
          startIcon={<AppRegistrationOutlinedIcon />}
          variant="outlined"
          type="submit"
        >
          Registration
        </LoadingButton>
      </form>
    </div>
  );
}

// export default function RegisterForm() {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Sign Up</h1>

//       <Formik
//         initialValues={{
//           name: '',
//           email: '',
//           password: '',
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={(values, { resetForm }) => {
//           resetForm();
//           dispatch(register(values));
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <TextField id="filled-basic" label="Filled" variant="filled" />
//             <label htmlFor="Name">Name</label>
//             <Field id="Name" name="name" placeholder="Jane" autoFocus />
//             <ErrorMessage component="div" name="name" />

//             <label htmlFor="Email">Email</label>
//             <Field
//               id="Email"
//               type="email"
//               name="email"
//               placeholder="jane@acme.com"
//             />
//             <ErrorMessage component="div" name="email" />

//             <label htmlFor="password">Password</label>
//             <Field id="password" name="password" />
//             <ErrorMessage component="div" name="password" />

//             {/* <Button
//               variant="outlined"
//               size="large"
//               endIcon={<AppRegistrationOutlinedIcon />}
//               fontSize="large"
//               type="submit"
//             >
//               Registration
//             </Button> */}

//             <LoadingButton
//               loading={false}
//               size="large"
//               loadingPosition="start"
//               startIcon={<AppRegistrationOutlinedIcon />}
//               variant="outlined"
//               type="submit"
//             >
//               Registration
//             </LoadingButton>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
