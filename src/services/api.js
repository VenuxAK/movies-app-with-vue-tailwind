import axios from "axios";

let api_key = "54a9c5975cd351423024bef5cd11e304";
let api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key,
    },
});

export default api;
