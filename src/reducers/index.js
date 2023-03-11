import { GET_DATA, GET_COMMENTS_DATA } from "../actions/"

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, user_data: action.data }
        case GET_COMMENTS_DATA:
            return { ...state, comments_data: action.data }
        default:
            return state
    }
}

export default reducer