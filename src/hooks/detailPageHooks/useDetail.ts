import { useQuery } from "react-query";
import { detail } from "../../api/detail";

interface IUseDetail {
  id: string;
  options?: any;
}

export function useDetail({ id, options }: IUseDetail) {
  return useQuery(["detailPageData", id], () => detail(id), {
    ...options,
  });
}