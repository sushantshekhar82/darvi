import config from "../../config";
import * as types from "./type"
import axios from "axios"

export const postuser = (name,email,mobile,password) =>async (dispatch) => {
  dispatch({ type: types.USER_LOADING });
  try {
    let res = await axios
    .post(`${config.LOCAL_URL}/api/register`,{
      name,email,mobile,password
    }) 
    dispatch({ type: types.USER_SUCCESS, payload:(res.data.message)})
   
    return res.data
  } catch (error) {
    dispatch({ type: types.USER_ERROR, payload: error.message })
  }
  

};
