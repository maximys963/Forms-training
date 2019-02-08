export const rootReducer = (state = {}, action) => {
    switch (action.type){
        case 'LOREM' :
            return{
                state
            };
        default : return state
    }

};