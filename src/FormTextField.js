import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FormTextField = ({ control, type, name, label, rules, defaultValue }) => {
  return (
    <Controller
      type={type}
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
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
