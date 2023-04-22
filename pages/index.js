import { GoogleLogin } from "@react-oauth/google";
import {registerUser} from '../utils/auth'

function index() {

  const handelSubmit = async (credentialResponse) => {
    let user = {
      client_id: credentialResponse.clientId,
      jwtToken: credentialResponse.credential,
    };

    await registerUser(user);
  };

 
  return (
    <div class="px-6 sm:px-0 max-w-sm">
     <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handelSubmit(credentialResponse);
                }}
                useOneTap
                type="icon"
                shape="circle"
                onError={() => {
                  console.log("Login Failed");
                }}
              />
    </div>
  )
}

export default index
