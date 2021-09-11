import axios from "axios";

export const GET_DATA = 'GET_DATA';
export const getData = () => async dispatch => {
    const { data } = await axios.get('http://localhost:4000/allUsers');
    const user = await axios.get(`http://localhost:4000/users/${data[0].id}`);

    dispatch({
        type: GET_DATA,
        payload: {
            data,
            user: user.data
        }
    })
};

export const GET_USER = 'GET_USER';
export const getUser = (id) => async dispatch => {
    const { data } = await axios.get(`http://localhost:4000/users/${id}`);

    dispatch({
        type: GET_USER,
        payload: data
    })
}

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (isLoad) => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: isLoad
    })
}
