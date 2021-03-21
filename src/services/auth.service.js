import http from "../utils/http-common";
import authHeader from './auth-header';

function signup(values) {
    return http.post("/auth/signup", values)
};

function login(values) {
    return http
        .post("/auth/signin", values)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
};

function confirm(user_id) {
    return http.put(`/auth/confirmation/${user_id}`);
}

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

function isLogged() {
    return http.get("/auth/check", { headers: authHeader() });
};

function updateUsername(newUsername) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.username = newUsername;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

function updateEmail(newEmail) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.email = newEmail;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

let methods = {
    signup,
    login,
    confirm,
    logout,
    getCurrentUser,
    isLogged,
    updateUsername,
    updateEmail
}

export default methods;