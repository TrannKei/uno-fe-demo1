import axios from 'axios';

const API_URL = "https://uno-be-demo2.herokuapp.com/api/users/";

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const createGuest = async (userData) => {
    const response = await axios.post(API_URL + 'guest', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Xoa thang guest khi no log out
const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}del/${id}`);

    return response.data;
}

const add = async (userData)=>{
    const response = await axios.post(API_URL + 'add', userData)
    return response.data;

}
const userService = {
    register,
    login,
    createGuest,
    deleteUser,
    add
}
export default userService;
