import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Bem-vindo ao Meu App 🔥</h1>
      <p className="text-lg">Faça login ou cadastre-se para acessar o sistema.</p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 px-6 py-2 rounded text-white"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-green-600 px-6 py-2 rounded text-white"
        >
          Cadastro
        </Link>
      </div>
    </main>
  );
}
