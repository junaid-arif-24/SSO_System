import React from 'react';
import TextField from '@mui/material/TextField';

const FormField = ({name, value, onChange, inputProps}) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      placeholder={name.replace(/([A-Z])/g, ' $1').trim()}
      name={name}
      value={value}
      onChange={onChange}
      required
      {...inputProps}
    />
  );
};

export default FormField;
