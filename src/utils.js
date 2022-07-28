export const apiBaseUrl = 'http://127.0.0.1:8000';

export const getDate = new Date();

export const setToken = (token) => {
    return localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem("token");
}

export const hasToken = () => {
    return getToken() ? true : false;
}

export const removeToken = () => {
    localStorage.removeItem('token');
}
