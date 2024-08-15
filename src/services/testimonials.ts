import {  Testimony } from "@/types";

export async function getTestimonials(): Promise<Testimony[]>{

    const response = await fetch(import.meta.env.VITE_API_URL + "/depoimentos")

    const data = await response.json()

    return data
}