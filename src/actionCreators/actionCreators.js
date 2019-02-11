import { SUBMIT_USER} from "../actions/actions";

export const addUser = (user_info) => ({
   type: SUBMIT_USER,
   user_info: user_info
});