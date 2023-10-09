import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().required('required').email('invalid email format'),
  password: Yup.string().required('Password tidak boleh kosong'),
});
