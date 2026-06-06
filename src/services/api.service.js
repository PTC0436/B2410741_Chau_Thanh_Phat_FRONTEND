import axios from "axios";

const commonConfig = {
  headers: {
    "Content-type": "Application/json",
    Accept: "Application/json",
  },
};

export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonConfig,
  });
};
