import * as axios from 'axios';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "9812fb89-3244-433f-b711-807defb18548"
        }
    }
);

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, ).then(response => response.data);
}

export const followTo = ({id}) => {
    return instance.post(`follow/${id}`)
}

export const unfollowTo = ({id}) => {
    return instance.delete(`follow/${id}`)
}
