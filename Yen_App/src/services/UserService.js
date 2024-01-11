import axios from "./axios";

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
  try {
    const res = await axios.post("/user/sign-in", data);
    return res.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const signupUser = async (data) => {
  const res = await axios.post("/user/sign-up", data);
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axios.get(`/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const deleteUser = async (id, access_token, data) => {
  const res = await axios.delete(`/user/delete-user/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const getAllUser = async (access_token) => {
  const res = await axios.get(`/user/getAll`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const refreshToken = async (refreshToken) => {
  console.log("refreshToken", refreshToken);
  const res = await axios.post(
    `/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`/user/log-out`);
  return res.data;
};

export const updateUser = async (id, data, access_token) => {
  const res = await axios.put(`/user/update-user/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const deleteManyUser = async (data, access_token) => {
  const res = await axios.post(`/user/delete-many`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};
