import { api } from "../api";
import { duasSchema } from "./schema";

export const getDuas = async () => {
  const res = await api.get("/auth/users");
  console.log(res);
  return res;
};
