import axios from 'axios';

const API_URL = 'http://localhost:5000/vehicles';

export const fetchVehicles = async () => axios.get(API_URL);
export const addVehicle = async (vehicle) => axios.post(API_URL, vehicle);
export const updateVehicleStatus = async (id, status) => axios.put(`${API_URL}/${id}`, { status });