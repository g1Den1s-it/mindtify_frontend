import api from "./index";


export default async function loginRequest(data){
    return await api.post(
      "/api/user/token/",
        data
    );
}