import { SUBMIT_USER, CHOOSE_GENDER} from "../actions/actions";

export const addUser = (user_info) => ({
   type: SUBMIT_USER,
   user_info: user_info
});

export const chooseGender = (genderOption) => ({
   type: CHOOSE_GENDER,
    genderOption
});