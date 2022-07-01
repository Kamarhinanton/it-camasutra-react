import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers:  {
        "API-KEY" : "a7f73287-44f1-48ca-9d96-68bd8b05e9e8"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        })
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
       return instance.delete(`follow/${id}`)
    },
    getProfile() {
       return instance.get(`profile/2`);
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}


