import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER || "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':  "POST, GET, OPTIONS, DELETE, PUT",
        'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    }
});