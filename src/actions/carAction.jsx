import axios from "axios";

export const GET_CAR = "GET_CAR";

export const getCar = () => {
    return (dispatch) => {

        //loading
        dispatch({
            type: GET_CAR,
            payload: {
                data: false,
                loading: true,
                errorMessage: false
            }
        })

        axios({
            method: 'GET',
            url: 'https://rent-cars-api.herokuapp.com/admin/car',
            timeout: 10000
        })
            .then((response) => {
                dispatch({
                    type: GET_CAR,
                    payload: {
                        data: response.data,
                        loading: false,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_CAR,
                    payload: {
                        data: false,
                        loading: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}