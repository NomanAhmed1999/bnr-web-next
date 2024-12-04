import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const imgLoader=({src}: any)=>{
  return `${ApiEndPoint}/api${src}`;
}

export const ApiEndPoint = 'https://www.test.dc3worx.ca'