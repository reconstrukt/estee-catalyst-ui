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

export const validateApplication = (uuid, token) => {
    const options = {
        method: 'POST',
    };

    return fetch(apiUrl + `/validate/${uuid}/${token}`, options).then(
        (response) => response.json(),
    );
};

export const editApplication = (uuid, fields) => {
    const formData = new FormData();

    for (let key in fields) {
        formData.append(key, fields[key]);
    }

    const options = {
        method: 'POST',
        body: formData,
    };

    return fetch(apiUrl + `/application/${uuid}/edit`, options).then(
        (response) => response.json(),
    );
};

export const newsletterSubscribe = (email) => {
    const formData = new FormData();

    formData.append('email', email);

    const options = {
        method: 'POST',
        body: formData,
    };

    return fetch(apiUrl + `/newsletter/subscribe`, options).then((response) =>
        response.json(),
    );
};
