import axios from 'axios';

let lang = "en-US";
class ErrorMessages {

    messages = [];

    constructor(messages: any) {
        this.messages = messages;
    }

}

if (process.browser) {
    // client-side-only code
    const _lang = window.location.pathname.split('/')[1];
    if(_lang && _lang.match(/[a-z]{2}-[A-Z]{2}/)) {
        lang = _lang
    }
}

const online = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MW_BASE_URL,
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Lang': lang
    }
});

// Add a response interceptor
online.interceptors.response.use((response: any) => {

    if (response?.data?.result) {
        return response.data.data;
    } else if (response?.data?.error) {
        throw new ErrorMessages(response.data.error?.errorMessages);
    }

    return response;
}, (error) => {
    return Promise.reject(error);
});

export { online, ErrorMessages };