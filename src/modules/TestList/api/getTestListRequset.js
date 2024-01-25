import api from "./index";

export default async function getTestListRequset(url){
    return await api.get(url);
}