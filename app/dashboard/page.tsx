'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../src/firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const items: any[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setData(items);
      } catch (err) {
        console.error(err);
        setError('Erro ao buscar dados.');
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (!user) return <p>Verificando login...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl">📊 Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">
          Sair
        </button>
      </div>

      <div>
        <h2 className="text-xl mb-4">Dados da coleção "users":</h2>
        {data.length === 0 ? (
          <p>Nenhum dado encontrado.</p>
        ) : (
          <ul className="space-y-2">
            {data.map((item) => (
              <li key={item.id} className="border p-2 rounded">
                {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
