import { useMutation } from '@tanstack/react-query';
import { signIn } from '../lib';
import { setCookie } from 'cookies-next';
import { storageKeys } from '@/constants/storage-keys';
import { useRouter } from 'next/navigation';
import { routeNames } from '@/constants/route-names';

const useSignInMutation = () => {
  const router = useRouter();
  const mutation = useMutation(signIn, {
    onSuccess: (data) => {
      setCookie(storageKeys.AUTH_TOKEN, data?.data?.token, {
        maxAge: data?.data?.expired_at?.format_integer,
      });

      router.replace(routeNames.dashboard);
    },
  });

  return mutation;
};

export default useSignInMutation;
