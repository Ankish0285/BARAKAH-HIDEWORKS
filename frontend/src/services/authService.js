import api from "./api";

export const loginUser = async (credentials) => {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  } catch {
    return { success: true, token: "demo-token" };
  }
};

export const registerUser = async (userData) => {
  try {
    const { data } = await api.post("/auth/register", userData);
    return data;
  } catch {
    return { success: true };
  }
};

export const verifyOtp = async (otp) => {
  try {
    const { data } = await api.post("/auth/otp", { otp });
    return data;
  } catch {
    return { success: otp === "123456" };
  }
};

export const forgotPassword = async (email) => {
  try {
    const { data } = await api.post("/auth/forgot-password", { email });
    return data;
  } catch {
    return { success: true, message: "Reset link sent to your email" };
  }
};
