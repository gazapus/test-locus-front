import http from "../utils/http-common";
//import authHeader from './auth-header';

function check_username(username) {
    return http.get(`/user/check/username/${username}`)
};

let methods = {
    check_username
}

export default methods;