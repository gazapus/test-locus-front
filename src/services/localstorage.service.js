function setUserData(data) {
    sessionStorage.setItem('user_test', JSON.stringify(data))
};

function getUserData() {
    return JSON.parse(localStorage.getItem('user_test'));
};

let methods = {
    setUserData,
    getUserData
};

export default methods;