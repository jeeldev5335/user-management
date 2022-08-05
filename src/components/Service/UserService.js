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
                    const { errors } = data;
                    return errors;
                })
        )
    }

    updateUser(id, data) {
        return (
            api.put(`/api/users/${id}`, hydrateUser(data))
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    const { errors } = error?.response?.data;
                    return errors;
                })
        )
    }

    deleteUser(id) {
        return (
            api.delete(`/api/users/${id}`)
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    const { errors } = error?.response?.data;
                    return errors;
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
                    return error;
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
                    console.log("data Error", error);
                    return error;
                })
        )
    }

    getAllUsers() {
        return (
            api.get(`/api/users`)
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    return error;
                })
        )
    }

    createUser(data) {
        return (
            api.post(`/api/users`, hydrateUser(data))
                .then((response) => {
                    return response;
                }).catch((error) => {
                    const { errors } = error?.response?.data;
                    return errors;
                })
        )
    }

    changeProfile(data) {
        return (
            api.put(`/api/change-profile`, hydrateUser(data))
                .then((response) => {
                    return response;
                }).catch((error) => {
                    return error;
                })
        )
    }

    loginUser(data) {
        return (
            api.post(`/api/login`, data)
                .then((response) => {
                    console.log(response);
                    return response?.data?.token;
                }).catch((error) => {
                    const { errors } = error?.response?.data;
                    return errors;
                })
        )
    }

    logoutUser() {
        return (
            api.post(`/api/logout`)
                .then((response) => {
                    return response?.data;
                }).catch((error) => {
                    return error;
                })
        )
    }
}

export default UserService;