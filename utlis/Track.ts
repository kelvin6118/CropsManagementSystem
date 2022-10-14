import { Track } from "../type/track";
import { apiURL } from "./apiURL";

export const createTrack = async (data: Track) => {

    const response = await fetch(`${apiURL}/track/Create`, {
        headers: {"Content-Type": "application/json" ,},
        method: 'POST', 
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}

export const getUserTracks = async (id: number) => {

    const response = await fetch(`${apiURL}/track/Get/${id}`);

    const result = await response.json();
    return result;
}
