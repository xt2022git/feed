import axios from 'axios';

//Variavel ambinte .ENV - tanto local como deploy
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

//Base_URL somente  local
/*export const api = axios.create({
    baseURL: 'http://localhost:3333',
});*/