'use client';

import AuthForm from '../../src/components/AuthForm';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <AuthForm isLogin />
    </main>
  );
}
