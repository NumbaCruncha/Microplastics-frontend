
import authHeader from './auth-header';
import { API_URL } from '../constants/apiConstants';
import fetch from 'node-fetch';

const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
    baseURL: 'https://api.sigma-analytics.co.nz/',
    proxy: false,
    httpsAgent: new HttpsProxyAgent('https://api.sigma-analytics.co.nz')
};

const axios = require ('axios').create(axiosDefaultConfig);


const getPublicContent = (props) => {
    return axios.get(API_URL + props);
};


const getPublicContent2 = (props) => {
    fetch('https://.api.sigma-analytics.co.nz', {
    method: 'get',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-CSRFToken': 'csrftoken',
    }
    // body: JSON.stringify({data: "your data"})
})

}


const getUserBoard = () => {
    return axios.get(API_URL + "/user/", {headers: authHeader() });
};


const getModeratorBoard = () => {
    return axios.get(API_URL + "/auth/user/", { headers: authHeader() });
};


const getAdminBoard = () => {
    return axios.get(API_URL + "/auth/user/", { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
};

