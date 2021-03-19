import http from "../utils/http-common";
import authHeader from "./auth-header";

function create(data, username) {
    return http.post(`/test/create/${username}`, data)
}

function getByUser() {
    return http.get(`/test/get-user`, { headers: authHeader()})
}

function remove(id) {
    return http.delete(`/test/delete/${id}`, { headers: authHeader()})
}

const methods = {
    create,
    getByUser,
    remove
}

export default methods;