import http from "../utils/http-common";
//import authHeader from "./auth-header";

function create(data, username) {
    return http.post(`/test/create/${username}`, data)
}

const methods = {
    create
}

export default methods;