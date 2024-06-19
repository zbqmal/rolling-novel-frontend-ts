import axios from "axios";

export const signUp = async (username: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:4000/account/signup", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const signIn = async () => {
  try {
    const response = await axios.get("http://localhost:4000/account/signin");
    return response.data;
  } catch (error) {
    console.error("SignIn error:", error);
    throw error;
  }
};
