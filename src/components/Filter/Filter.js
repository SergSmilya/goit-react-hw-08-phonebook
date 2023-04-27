import { InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { chancheFilterValue } from 'redux/filterSlice';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export default function Filter() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      filter: '',
    },
  });

  function searchFilter(e) {
    const value = e.target.value.toLowerCase();
    dispatch(chancheFilterValue(value));
  }

  return (
    <div>
      <form onChange={searchFilter}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="normal"
          fullWidth
          id="filter"
          name="filter"
          label="Search"
          value={formik.values.filter}
          type="search"
          // onChange={searchFilter}
          onChange={formik.handleChange}
          helperText={formik.touched.filter && formik.errors.filter}
          placeholder="Enter name"
        />
      </form>
    </div>
  );
}
