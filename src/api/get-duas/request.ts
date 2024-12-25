import { api } from "../api";

export const getDuas = async () => {
  const res = await api.get("/auth/users");
  console.log(res);
  return res;
};
