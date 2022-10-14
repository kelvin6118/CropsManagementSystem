import { Track } from "../type/track";
import { webApiURL } from "./apiURL";

export const createTrack = async (data: Track) => {

    const response = await fetch(`${webApiURL}/track/Create`, {
        headers: {"Content-Type": "application/json" ,},
        method: 'POST', 
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}

export const getUserTracks = async (id: number) => {

    return await fetch(`${webApiURL}/track/Get/${id}`,{
        headers: {"Content-Type": "application/json" ,}
    }).then((result)=>{
        return result.json()
    }).catch((err)=>{
        console.log('An error occure: ' + err.message);
        throw err;
    })

}
