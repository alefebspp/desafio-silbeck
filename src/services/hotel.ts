import {  Hotel } from "@/types";

export async function getHotelInfo(): Promise<Hotel>{

    const response = await fetch(import.meta.env.VITE_API_URL + "/hotel")

    const data = await response.json()

    return data
}