import React, { useState } from 'react';

const AddVehicleForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && status) {
            onAdd({ name, status });
            setName('');
            setStatus('');
        } else {
            alert('Both fields are required');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Vehicle Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <button type="submit">Add Vehicle</button>
        </form>
    );
};

export default AddVehicleForm;