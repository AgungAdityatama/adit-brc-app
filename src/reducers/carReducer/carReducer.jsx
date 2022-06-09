import { GET_CAR } from "../../actions/carAction";

const initialState = {
    getDataCarResult: false,
    getDataCarLoading: false,
    getDataCarError: false
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAR:
            return {
                ...state,
                getDataCarResult: action.payload.data,
                getDataCarLoading: action.payload.loading,
                getDataCarError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default carReducer