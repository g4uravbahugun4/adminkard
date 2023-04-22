import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const registerUser = async (user) => {
  try {
    const res = await axios.post(`${baseUrl}/api/User`, { user });

    setToken(res.data);
  } catch (error) {
    setError(catchErrors(error));
  }
 
};

export const loginUser = async (user ) => {
 
  try {
    const res = await axios.post(`${baseUrl}/api/auth`, { user });

    setToken(res.data);
  } catch (error) {
    setError(catchErrors(error));
  }
  setLoading(false);
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    window.location.href = location;
  }
};

const setToken = token => {
  cookie.set("token", token);
  window.location.href = "/welcome";
};

export const logoutUser = email => {
  cookie.set("userEmail", email);
  cookie.remove("token");
  window.location.href = "/index";
};
