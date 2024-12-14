import React, { useEffect, useState } from 'react';
import { fetchVehicles, addVehicle, updateVehicleStatus } from './services/api';
import AddVehicleForm from './components/AddVehicleForm';
import VehicleTable from './components/VehicleTable';
import './App.css';

const App = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehiclesData();
    }, []);

    const fetchVehiclesData = async () => {
        try {
            const response = await fetchVehicles();
            setVehicles(response.data);
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }
    };

    const handleAddVehicle = async (vehicle) => {
        try {
            await addVehicle(vehicle);
            fetchVehiclesData();
        } catch (error) {
            console.error('Error adding vehicle:', error);
        }
    };

    const handleUpdateStatus = async (id, status) => {
        try {
            await updateVehicleStatus(id, status);
            fetchVehiclesData();
        } catch (error) {
            console.error('Error updating vehicle status:', error);
        }
    };

    return (
        <div className="App">
            <h1>Vehicle Management Dashboard</h1>
            <AddVehicleForm onAdd={handleAddVehicle} />
            <VehicleTable vehicles={vehicles} onUpdateStatus={handleUpdateStatus} />
        </div>
    );
};

export default App;