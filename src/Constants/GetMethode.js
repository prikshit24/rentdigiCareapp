import axios from "axios";
import { useCallback } from "react";
import { googleAuth } from "../config";


const useGetReq = () => {
    const getData = useCallback((path, params, token) => {
        // if (setLoader) setLoader(true);
        // alert(token)
        return new Promise((resolve, reject) => {
            if (token) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            }
            // .get(`${api.GET_DOOR_STATUS}?serialNumber=` + serialNumber)
            axios
                .get(path, params)
                .then((res) => {
                    // if (onComplete) onComplete(res.data);
                    // if (setLoader) setLoader(false);
                    resolve(res);
                })
                .catch((err) => {
                    reject(err.response.data);
                });
        });
    }, []);


    return [getData];
};

export default useGetReq;
