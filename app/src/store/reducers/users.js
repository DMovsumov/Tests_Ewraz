import {GET_DATA, GET_USER, SET_LOADING} from "../actions/users";

const initialState = {
    allUsers: [],
    activeUser: {},
    status: {
        loading: false
    }
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                allUsers: [...action.payload.data],
                activeUser: action.payload.user
            }
        case GET_USER:
            return {
                ...state,
                activeUser: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                status: {
                    loading: action.payload
                }
            }
        default:
            return state
    }
}
