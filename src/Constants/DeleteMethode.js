import axios from "axios";
import { useCallback } from "react";
import { googleAuth } from "../config";


const useDeleteReq = () => {
    const deleteData = useCallback((path, params, token) => {
        // if (setLoader) setLoader(true);
        // alert(token)
        return new Promise((resolve, reject) => {
            if (token) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            }
            axios
                .delete(path, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err.response.data);
                });
        });
    }, []);


    return [deleteData];
};

export default useDeleteReq;
