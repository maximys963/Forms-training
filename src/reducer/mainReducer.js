import {SUBMIT_USER} from "../actions/actions";

export const registration = (state = {}, action) => {
    switch (action.type){
        case SUBMIT_USER :
            return{
                ...state,
                userInformation: action.user_info
            };
        default : return state
    }

};