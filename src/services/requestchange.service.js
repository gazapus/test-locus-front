import http from "../utils/http-common";
import authHeader from "./auth-header";

function create(data) {
    return http.post(`/changerequest/create/`, data, { headers: authHeader()});
}

function confirm(id) {
    return http.put(`/changerequest/confirm/${id}`)
}

function cancel(id) {
    return http.put(`/changerequest/cancel/${id}`)
}

function confirmChangePassword(id) {
    return http.put(`/changepasswordrequest/confirm/${id}`)
}

function requestChangePassword(data) {
    return http.post(`/changepasswordrequest/create`, data, { headers: authHeader()})
}

const methods = {
    create,
    confirm,
    cancel,
    confirmChangePassword,
    requestChangePassword
}

export default methods;