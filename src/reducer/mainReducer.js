import {SUBMIT_USER, CHOOSE_GENDER} from "../actions/actions";

export const registration = (state = {}, action) => {
    switch (action.type){
        case SUBMIT_USER :
            return{
                ...state,
                userInformation: action.user_info
            };
        case CHOOSE_GENDER :
            return{
                ...state,
                gender: action.genderOption

            };
        default : return state
    }

};