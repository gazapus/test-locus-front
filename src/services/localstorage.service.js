function setUserData(data) {
    sessionStorage.setItem('user_test', JSON.stringify(data))
};

function getUserData() {
    return JSON.parse(sessionStorage.getItem('user_test'));
};

function removeUserData() {
    sessionStorage.removeItem('user_test');
}

let methods = {
    setUserData,
    getUserData,
    removeUserData
};

export default methods;