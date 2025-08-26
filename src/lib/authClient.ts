const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

type LoginOk = { token: string };

export async function loginRequest(email: string, password: string): Promise<LoginOk> {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });

  if (res.ok) {
    const data = await res.json();
    if (!data?.token) {
      throw new Error('Authentication failed. Please try again.');
    }
    return { token: data.token };
  }

  // Try to parse server error body for useful message
  let message = 'Login failed. Please try again.';
  try {
    const err = await res.json();
    const details = err?.details;
    const fieldErrors = details?.fieldErrors;
    const formErrors = details?.formErrors;
    const firstField = fieldErrors && Object.values(fieldErrors).flat().find(Boolean);
    const firstForm = Array.isArray(formErrors) && formErrors.find(Boolean);
    message = (firstField as string) || (firstForm as string) || err?.error || err?.message || message;
  } catch {
    // ignore JSON parse errors
  }

  if (res.status === 401) message = 'Invalid username or password.';
  if (res.status === 400 && message === 'Login failed. Please try again.') message = 'Invalid input.';
  throw new Error(message);
}


