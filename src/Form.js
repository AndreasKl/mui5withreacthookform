import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from "./FormTextField";

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),

  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "300px",
  },
  "& .MuiButtonBase-root": {
    margin: theme.spacing(2),
  },
}));

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "@",
  password: "",
};

const Form = ({ handleClose }) => {
  const { handleSubmit, control, setError } = useForm({
    defaultValues,
    criteriaMode: "all",
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  const handleServerError = () => {
    setError("firstName", {
      type: "manual",
      message: "An unexpected server error occurred!",
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        control={control}
        name="firstName"
        label="First Name"
        rules={{ required: "First name is required" }}
      />
      <TextField
        control={control}
        name="lastName"
        label="Last Name"
        rules={{ required: "Last name is required" }}
      />
      <TextField
        control={control}
        name="email"
        label="E-Mail"
        rules={({ required: "E-Mail is required" })}
        type="email"
      />
      <TextField
        control={control}
        name="password"
        label="Password"
        rules={{ required: "Password is required", minLength: { value: 8, message: "Use at least 8 symbols for your password." } }}
        type="password"
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
      <div>
        <Button variant="contained" onClick={handleServerError}>
          Server Error
        </Button>
      </div>
    </StyledForm>
  );
};

export default Form;
