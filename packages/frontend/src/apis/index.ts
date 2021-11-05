// @axios
import axios from "axios";

export const CarrierAPI = axios.create({
	baseURL: "http://localhost:5000",
	headers: {
		"Content-Type": "application/json",
	},
});
