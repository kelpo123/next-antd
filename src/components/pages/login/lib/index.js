import { URL_SIGN_IN } from '@/constants/urls';
import { api } from '@/utils/api';

export const signIn = async (payload) => {
  const { data } = await api.post(URL_SIGN_IN, payload, {
    headers: {},
  });
  return data;
};
