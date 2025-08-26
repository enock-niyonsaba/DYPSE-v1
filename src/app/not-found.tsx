import Link from 'next/link';
import { MainLayout } from '../components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="text-gray-600 mt-2">Page not found</p>
          <Link 
            href="/" 
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Go back home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
