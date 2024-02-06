import api from "./index";


export default async function postRegistrationRequest(url, data){
    return await api.post(url, data);
};