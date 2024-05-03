import config from './config';

const apiUrl = config.apiUrl;

export const initApplication = (email) => {
    const formData = new FormData();

    formData.append('email', email);

    const options = {
        method: 'POST',
        body: formData,
    };

    return fetch(apiUrl + `/application/create`, options).then((response) =>
        response.json(),
    );
};

export const fetchToken = () => {
    return fetch(apiUrl + '/token').then((response) => response.json());
};
