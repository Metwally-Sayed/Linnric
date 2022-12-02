import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupSchema = yup.object().shape({
  email: yup.string().email('please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: 'please enter a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'password not matching')
    .required('required'),
});
