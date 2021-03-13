function setUserData(data) {
    sessionStorage.setItem('user_test', JSON.stringify(data))
};

function getUserData() {
    return JSON.parse(sessionStorage.getItem('user_test'));
};

function removeUserData() {
    sessionStorage.removeItem('user_test');
}

function setUsernameTest(username) {
    sessionStorage.setItem('username_test', username);
}

function getUsernameTest() {
    sessionStorage.getItem('username_test');
}

function removeUsernameTest() {
    sessionStorage.removeItem('username_test');
}

let methods = {
    setUserData,
    getUserData,
    removeUserData,
    setUsernameTest,
    getUsernameTest,
    removeUsernameTest
};

export default methods;