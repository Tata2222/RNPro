import * as Yup from 'yup';

export const RegisterLoginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('invalid email').required('required'),
    password: Yup.string().required('required'),
  });

export const RegisterSignUpSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('invalid email').required('required'),
    userName: Yup.string().required('required'),
    firstName: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    password: Yup.string().required('required'),
    confirmPassword: Yup.string().required('required'),
  });
