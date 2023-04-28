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
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { selectIsLoadingContacts, selectErrorAuth } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function LogInForm() {
  const isLoading = useSelector(selectIsLoadingContacts);
  const messageErrorAuth = useSelector(selectErrorAuth);
  const [isShowSnack, setIsShowSnack] = useState(false);

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (messageErrorAuth) setIsShowSnack(true);
    return;
  }, [messageErrorAuth]);

  const handleCloseSnack = () => setIsShowSnack(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LogInSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
  });

  return (
    <div>
      <Typography align="center" component={'h2'} variant="h4" mb={2}>
        LogIn
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Enter email"
          />

          <TextField
            sx={{ mb: 1 }}
            variant="outlined"
            fullWidth
            id="password"
            email="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
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
          color="primary"
          size="medium"
          variant="outlined"
          endIcon={<SendIcon />}
          loading={isLoading}
          loadingPosition="end"
          type="submit"
          fullWidth
        >
          LogIn
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
