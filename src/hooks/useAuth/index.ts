import { ApolloError, useQuery } from "@apollo/client";
import { IS_AUTH } from "../../apollo/auth";

type User = {
  id: string | undefined;
  error: ApolloError | undefined;
};

export const useAuth = (): User => {
  const { data, error } = useQuery<{ user: User }>(IS_AUTH);
  return {
    id: data?.user?.id,
    error: error,
  };
};
