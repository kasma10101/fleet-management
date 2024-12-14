import React from 'react';

const VehicleTable = ({ vehicles, onUpdateStatus }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Vehicle Name</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map((vehicle) => (
                    <tr key={vehicle._id}>
                        <td>{vehicle.name}</td>
                        <td>{vehicle.status}</td>
                        <td>{new Date(vehicle.lastUpdated).toLocaleString()}</td>
                        <td>
                            <button onClick={() => onUpdateStatus(vehicle._id, 'Active')}>Set Active</button>
                            <button onClick={() => onUpdateStatus(vehicle._id, 'Inactive')}>Set Inactive</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default VehicleTable;