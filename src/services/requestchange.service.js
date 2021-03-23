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

const methods = {
    create,
    confirm,
    cancel
}

export default methods;