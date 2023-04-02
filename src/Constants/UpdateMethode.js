


import axios from "axios";
import { useCallback } from "react";
import { googleAuth } from "../config";
import api from "./API";

//  .post(`${api.POST_LOGIN}`, data)
const usePutReq = () => {
    const putData = useCallback((path, params, token) => {
        return new Promise((resolve, reject) => {
            if (token) {
                axios.defaults.headers.common["Authorization"] = token;
            }
            axios
                .put(path, params)
                .then((res) => {
                    // if (onComplete) onComplete(res.data);
                    // setLoader(false);
                    resolve(res);
                })
                .catch((err) => {
                    // setLoader(false);
                    // if (onError) onError(err);
                    reject(err.response.data);
                });
        });
    }, []);



    return [putData];
};

export default usePutReq;
