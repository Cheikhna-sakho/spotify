import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API = axios.create({
    baseURL: BASE_URL
});
export const getAlbums = () => API.get(`/albums`);
export const getAlbum = (id) => API.get(`/albums/${id}`);
export const getGenres = () => API.get(`/genres`);
export const getGenre = (id) => API.get(`/genres/${id}`);

   