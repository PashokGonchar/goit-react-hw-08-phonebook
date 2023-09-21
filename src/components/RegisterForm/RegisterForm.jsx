import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { register } from 'redux/user/operations';

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
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
    dispatch(register(data));
  };

  const onFormError = error => {
    toast.error(error);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              variant="outlined"
              size="small"
              error={errors.name && true}
              helperText={errors.name?.message}
              required
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              size="small"
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
      </Form>

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
    </>
  );
}
