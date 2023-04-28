import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { selectErrorAuth, selectIsLoadingContacts } from 'redux/selectors';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
  const messageErrorAuth = useSelector(selectErrorAuth);
  const [isShowSnack, setIsShowSnack] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (messageErrorAuth) setIsShowSnack(true);
    return;
  }, [messageErrorAuth]);

  const handleCloseSnack = () => setIsShowSnack(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

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
      <Typography align="center" component={'h2'} variant="h4" mb={2}>
        Sign Up
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            fullWidth
            variant="outlined"
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Enter Name"
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Enter Email"
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            placeholder="Enter password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <LoadingButton
          loading={isLoading}
          size="large"
          loadingPosition="end"
          endIcon={<AppRegistrationOutlinedIcon />}
          variant="outlined"
          type="submit"
          fullWidth
        >
          Registration
        </LoadingButton>
      </form>

      <Snackbar
        open={isShowSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
      >
        <Alert severity="error">{messageErrorAuth}</Alert>
      </Snackbar>
    </div>
  );
}
