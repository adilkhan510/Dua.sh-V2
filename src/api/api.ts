import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";

// const baseUrl = import.meta.env.VITE_API_URL;

export const api = wretch("http://localhost:8000")
  .addon(QueryStringAddon)
  .resolve((res) => res.json());
