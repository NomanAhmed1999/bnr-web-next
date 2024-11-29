'use client'
// pages/index.tsx
import { useEffect, useState } from 'react';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}
