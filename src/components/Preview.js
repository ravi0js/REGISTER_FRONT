import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Preview = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('/api/users/all');
            setUsers(res.data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user._id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <img src={`/${user.profileImage}`} alt={user.name} />
                </div>
            ))}
        </div>
    );
};

export default Preview;
