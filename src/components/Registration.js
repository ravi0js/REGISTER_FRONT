import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profileImage: null,
        password: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'profileImage') {
            setFormData({ ...formData, profileImage: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('profileImage', formData.profileImage);
        data.append('password', formData.password);

        try {
            const res = await axios.post('/api/users/register', data);
            alert(res.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div>
                <label>Profile Image:</label>
                <input type="file" name="profileImage" onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Registration;
