import { redirect } from 'react-router-dom';
import MainPage from './main-page/main-page';
import RegisterPage from './register-page/register-page';
import LoginPage from './login-page/login-page';

export const routes = [
  { index: true, loader: () => redirect('main-page') },
  { path: 'main-page', element: <MainPage />, text: 'Main Page' },
  { path: 'register-page', element: <RegisterPage />, text: 'Register Page' },
  { path: 'login-page', element: <LoginPage />, text: 'Login Page' }
];
