import http from "../utils/http-common";
import authHeader from './auth-header';

function check_username(username) {
    return http.get(`/user/check/username/${username}`)
};

function update_username(data) {
    return http.put(`/user/update/one/username`, data, { headers: authHeader()})
};

function update_password(data) {
    return http.put(`/user/update/one/password`, data, { headers: authHeader()})
};

function deleteAccount() {
    return http.delete(`/user/delete-self`, { headers: authHeader()})
};

let methods = {
    check_username,
    update_username,
    update_password,
    deleteAccount
}

export default methods;