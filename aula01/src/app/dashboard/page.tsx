'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  nome: string;
  email: string;
};

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        console.log('Dados recebidos:', data);

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('API não retornou um array!');
          setUsers([]); // evita crash
        }
      } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        setUsers([]);
      }
    }

    fetchUsers();
  }, []);

  return (
    <main>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.nome}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
