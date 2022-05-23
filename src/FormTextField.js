import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FormTextField = ({ control, type, name, label, rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          label={label}
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
      rules={rules}
    />
  );
};

export default FormTextField;
