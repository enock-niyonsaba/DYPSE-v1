'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { MainLayout } from '../../components/layout/MainLayout';

export default function DashboardRedirect() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        router.push('/admin/dashboard');
      } else if (user.role === 'employer') {
        router.push('/employer/dashboard');
      } else {
        router.push('/youth/dashboard');
      }
    } else {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Redirecting...</h1>
          <p className="text-gray-600 mt-2">Please wait while we redirect you to your dashboard.</p>
        </div>
      </div>
    </MainLayout>
  );
}
