// Basic authentication utility for client-side auth

// Check if admin features are disabled via environment variable
const DISABLE_ADMIN = process.env.NEXT_PUBLIC_DISABLE_ADMIN === 'true';

// Check if a user is authenticated
export function isAuthenticated(): boolean {
  // If admin features are disabled, always return false
  if (DISABLE_ADMIN) {
    return false;
  }

  if (typeof window === 'undefined') {
    return false; // We're on the server, default to not authenticated
  }

  try {
    const authDataStr = localStorage.getItem('adminAuthToken');
    if (!authDataStr) return false;

    const authData = JSON.parse(authDataStr);
    
    // Check if token has expired
    if (authData.expiry && authData.expiry < Date.now()) {
      // Token expired, clean up and return false
      localStorage.removeItem('adminAuthToken');
      return false;
    }
    
    return !!authData.token;
  } catch (error) {
    console.error('Auth check error:', error);
    return false;
  }
}

// Log out the current user
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminAuthToken');
    
    // Redirect to login (this should typically be done by the component calling logout)
    window.location.href = '/admin/login';
  }
}

// A helper to generate a password hash for setting up the env variable
// This function is meant to be used in development to generate the hash to set in .env
export async function generatePasswordHash(password: string): Promise<string> {
  if (typeof window === 'undefined') {
    throw new Error('This function must be run in the browser');
  }
  
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
} 