import { ACTIONS } from '../actions/fetch'

export const initialState = {
    data: [],
    loading: true,
    error: false
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_DATA :
            return {
                data: [{
                    total: action.payload.total,
                    result: action.payload.result
                }],
                loading: false,
                error: false
            }
        case ACTIONS.SET_ERROR :
            return {
                data: [],
                loading: false,
                error: true
            }
        // case ACTIONS.SET_LOADING :
        //     return {
        //         data: [],
        //         loading: true,
        //         error: false
        //     }
            
        default:
            return state;
    }
}