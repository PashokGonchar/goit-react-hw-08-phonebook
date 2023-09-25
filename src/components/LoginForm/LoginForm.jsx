import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { logIn } from 'redux/user/operations';
import { DivLoginForm, StyledLoginForm } from './LoginForm.styled';

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const onFormSubmit = data => {
    dispatch(logIn(data));
  };

  const onFormError = error => {
    toast.error(error);
  };

  return (
    <DivLoginForm>
      <h2>Please log in</h2>
      <StyledLoginForm onSubmit={handleSubmit(onFormSubmit, onFormError)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              error={errors.email && true}
              helperText={errors.email?.message}
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              size="small"
              error={errors.password && true}
              helperText={errors.password?.message}
              type={values.showPassword ? 'text' : 'password'}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </StyledLoginForm>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </DivLoginForm>
  );
}
