import axios from "axios";

export const instance = axios.create({
	baseURL: "https://web-app-dbc85-default-rtdb.firebaseio.com/",
});