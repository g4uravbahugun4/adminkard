import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/auth";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
         
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  
  let pageProps = {};

  const protectedRoutes =
    ctx.pathname === "/index" ||
    ctx.pathname==="/welcome"


  if (!token) {

    protectedRoutes && redirectUser(ctx, "/index");
  }
  //
  else {
    

    try {
    

      const res = await axios.get(`${baseUrl}/api/User`, {
        headers: { Authorization: token },
      });

      const { user} = res.data;

      if (user) !protectedRoutes && redirectUser(ctx, "/welcome");
                  
   
  
    pageProps.user = user
     
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/index");
    }
  }

  return { pageProps };
};

export default MyApp;


