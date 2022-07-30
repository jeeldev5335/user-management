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

export const hobbiesOptions = [
    { name: 'Cricket', value: 'Cricket' },
    {
        name: 'Volleyball',
        value: 'Volleyball'
    },
    {
        name: 'Hockey',
        value: 'Hockey'
    },
    {
        name: 'Football',
        value: 'Football'
    }
];

export const hydrateUser = (data) => {
    return {
        ...data,
        hobby: data && data.hobby && data.hobby.join(','),
    }
}

export const allowOnlyNumbers = (event) => {
    if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
        event.preventDefault();
    }
    return true;
}

export const allowOnlyAlphabets = (event) => {
    if (event.keyCode > 31 && (event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122)) {
        event.preventDefault();
    }
    return true;
}