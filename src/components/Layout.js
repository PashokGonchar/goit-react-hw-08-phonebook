import { Container, CssBaseline } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UsersBar from './UsersBar/UsersBar';


export default function Layout() {

  return (
    <>
      <CssBaseline />
      <Container>
        <UsersBar />
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
