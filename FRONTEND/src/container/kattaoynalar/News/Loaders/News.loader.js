import axios from "axios";
import Backend_Host from "../../../../Backend_Host";

export async function NewsLoader(){
    const res=await axios.get(`${Backend_Host}/news/many`)
    const data=res.data
    console.log(data);
    
    return data
}