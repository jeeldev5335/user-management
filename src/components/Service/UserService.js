import api from '../../api';
import { hydrateUser } from '../../utils';

class UserService {

    addUser(data) {
        return (
            api.post(`/api/register`, hydrateUser(data))
                .then((response) => {
                    return response?.data;
                    // ?. => this is called Optional chaining.
                }).catch((error) => {
                    const { response } = error;
                    const { data } = response;
                    throw data;
                })
        )
    }

    updateUser(id, data) {
        return (
            api.put(`/api/users/${id}`, hydrateUser(data))
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    const { data } = error?.response;
                    throw data;
                })
        )
    }

    deleteUser(id) {
        return (
            api.delete(`/api/users/${id}`)
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    const { data } = error?.response;
                    throw data;
                })
        )
    }

    getMe() {
        return (
            api.get(`/api/me`)
                .then((response) => {
                    return response;
                })
                .catch((error) => {
                    throw error;
                })
        )
    }

    getUser(id) {
        return (
            api.get(`/api/users/${id}`)
                .then((response) => {
                    return response?.data;
                })
                .catch((error) => {
                    throw error;
                })
        )
    }

    getAllUsers() {
        return (
            api.get(`/api/users`)
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    throw error;
                })
        )
    }

    createUser(data) {
        return (
            api.post(`/api/users`, hydrateUser(data))
                .then((response) => {
                    return response;
                }).catch((error) => {
                    const { data } = error?.response;
                    throw data;
                })
        )
    }

    changeProfile(data) {
        return (
            api.put(`/api/change-profile`, hydrateUser(data))
                .then((response) => {
                    return response;
                }).catch((error) => {
                    throw error;
                })
        )
    }

    changePassword(data) {
        return (
            api.put(`/api/change-password`, data)
                .then((response) => {
                    return response;
                })
                .catch((error) => {
                    const { response } = error;
                    const { data } = response;
                    throw data;
                })
        )
    }

    loginUser(data) {
        return (
            api.post(`/api/login`, data)
                .then((response) => {
                    return response?.data?.token;
                }).catch((error) => {
                    const { data } = error?.response;
                    throw data;
                })
        )
    }

    logoutUser() {
        return (
            api.post(`/api/logout`)
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    throw error;
                })
        )
    }
}

export default UserService;