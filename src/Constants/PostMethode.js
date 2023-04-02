import axios from "axios";
import { useCallback } from "react";
const usePostReq = () => {
    const postData = useCallback((path, params, token) => {
        return new Promise((resolve, reject) => {
            if (token) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            }
            axios
                .post(path, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err.response.data);
                });
        });
    }, []);
    return [postData];
};

export default usePostReq;
