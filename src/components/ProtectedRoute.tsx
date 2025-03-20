'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    // Check authentication
    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push('/admin/login');
        setAuthorized(false);
        return;
      }
      
      setAuthorized(true);
    };

    checkAuth();
  }, [router]);

  // Show loading state while checking auth
  if (authorized === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="mt-4 text-light-text">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authorized, return null (redirect is handled in the useEffect)
  if (!authorized) {
    return null;
  }

  // If authorized, render children
  return <>{children}</>;
} 