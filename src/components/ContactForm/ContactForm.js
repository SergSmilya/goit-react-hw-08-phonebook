import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperation';
import { selectContacts, selectIsLoadingContacts } from 'redux/selectors';
import { LoadingButton } from '@mui/lab';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Box, TextField } from '@mui/material';

export default function ContactForm() {
  const isLoading = useSelector(selectIsLoadingContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // ValidationSchema
  const Schema = yup.object({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      resetForm();

      const dataNameLowerCase = values.name.toLowerCase().trim();

      if (
        contacts.find(el => dataNameLowerCase === el.name.toLowerCase().trim())
      ) {
        alert(`Contact was added`);
        return;
      }

      dispatch(addContact(values));
    },
  });

  return (
    <div>
      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            variant="outlined"
            fullWidth
            id="name"
            name="name"
            label="Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Enter name"
          />

          <TextField
            fullWidth
            variant="outlined"
            id="number"
            name="number"
            label="Number"
            type="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            helperText={formik.touched.number && formik.errors.number}
            placeholder="Enter number"
            error={!formik.isValid}
          />
        </Box>
        <LoadingButton
          color="primary"
          size="medium"
          variant="outlined"
          endIcon={<PersonAddOutlinedIcon />}
          loading={isLoading}
          loadingPosition="end"
          type="submit"
          fullWidth
        >
          Add contact
        </LoadingButton>
      </form>
    </div>
  );
}
