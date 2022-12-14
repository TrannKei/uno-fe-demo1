import axios from 'axios';

const API_URL = 'https://uno-be-demo2.herokuapp.com/api/users/'

const joinRoom = async(roomCode, userId) => {
    const response = await axios.put(`${API_URL}join/${userId}`, roomCode);
    return response.data;
}

const createRoom = async(userId) => {
    const response = await axios.put(`${API_URL}createRoom/${userId}`);

    return response.data;
}

const leaveRoom = async(userId) => {
    const response = await axios.put(`${API_URL}leave/${userId}`);
    return response.data;
}

const roomService = {
    joinRoom,
    createRoom,
    leaveRoom
}

export default roomService;