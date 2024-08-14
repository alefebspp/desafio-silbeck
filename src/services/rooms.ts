import { Room } from "@/types";

export async function getRooms(): Promise<Room[]>{

    const response = await fetch(import.meta.env.VITE_API_URL + "/aptos")

    const data = await response.json()

    return data
}