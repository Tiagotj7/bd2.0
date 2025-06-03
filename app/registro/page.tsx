'use client';

import AuthForm from '../../src/components/AuthForm';

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Cadastro</h1>
      <AuthForm isLogin={false} />
    </main>
  );
}
