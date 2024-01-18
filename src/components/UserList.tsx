import { ReactNode, useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

interface UserData {
    id: number;
    name: string;
    username: string;
}

async function getData(): Promise<UserData[]> {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users',
        );
        const data: UserData[] = response.data;
        return data;
    } catch (error) {
        // Handle error appropriately, e.g., log it or throw an exception
        console.error('Error fetching data:', error);
        throw error;
    }
}

function UserList(): ReactNode {
    const [users, setUsers] = useState<UserData[]>([]);
    useEffect(() => {
        getData()
            .then((userData) => {
                setUsers(userData);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }, []);

    return (
        <Card>
            <Card.Title>Total {users.length} Users:</Card.Title>
            <Card.Body>
                <ol>
                    <li>Username: name</li>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.username}: {user.name}
                        </li>
                    ))}
                </ol>
            </Card.Body>
        </Card>
    );
}

export default UserList;
