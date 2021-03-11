import http from "../utils/http-common";
import authHeader from './auth-header';

function login(username, password) {
    return http
        .post("/auth/signin", { username, password })
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

function isLogged() {
    return http.get("/auth/check", { headers: authHeader() });
};

let methods = {
    login,
    logout,
    getCurrentUser,
    isLogged
}

export default methods;