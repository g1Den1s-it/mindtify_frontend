import api from "./index.mjs";

export default async function getTestListRequset(url){
    return await api.get(url);
}