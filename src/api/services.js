import axios from "axios";
const url_auth = "http://localhost:3000/authenticate";


export const loginUser = async (body) => {
  try {
    const response = await axios.post(url_auth, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    
    return response;
  } catch (error) {
    return error;
  }
};
