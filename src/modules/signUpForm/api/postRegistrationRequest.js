import api from "./index";


export default async function postRegistrationRequest(data){
    return await api.post("/api/user/sign-up/", data);
};