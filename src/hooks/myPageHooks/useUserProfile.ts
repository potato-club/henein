import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { setUserName } from "../../api/userInfo";

interface IUseSetUserName {
  setName: string;
  accessToken: string | undefined;
  options?: any;
}

export const useSetUserName = ({
  setName,
  accessToken,
  options,
}: IUseSetUserName) => {
  const router = useRouter();
  const { mutate } = useMutation(() => setUserName(setName, accessToken), {
    ...options,
    enabled: !!accessToken,
    onSuccess: (data) => {
      router.push("/");
    },
    onError: (err) => {
      alert("set-userName 에러입니다.");
      console.log(err);
    },
  });

  return { mutate };
};
