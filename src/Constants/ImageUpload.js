import axios from "axios";
import { useCallback } from "react";
import { googleAuth } from "../config";
import api from "./API";

//  .post(`${api.POST_LOGIN}`, data)
const ImagePostReq = () => {
    const imageData = useCallback((path, params, token) => {
        var data = new FormData();
        data.append("image", params);
        // setLoader(true);
        // alert("params1 :" + JSON.stringify(data))
        return new Promise((resolve, reject) => {
            axios
                .post(path, data)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err.response.data);
                });
        });
    }, []);



    return [imageData];
};

export default ImagePostReq;
