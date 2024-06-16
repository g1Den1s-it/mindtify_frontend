import api from "./index";


export default async function postLoginRequest(data){
    return await api.post(
      "/api/user/token/",
        data
    );
}