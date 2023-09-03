import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  identity: Yup.string().required('Email/Nomor Telepon tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
});
