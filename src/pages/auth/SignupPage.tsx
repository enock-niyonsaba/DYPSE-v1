'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaExclamationCircle, FaCheckCircle, FaCreditCard } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { NavBar } from '@/components/layout/NavBar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { authService } from '@/lib/authService';
import { toast } from 'react-hot-toast';

export function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rwandaId: '',
    role: 'youth' as const, // Default role
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Add Rwanda ID validation (required field)
    if (!formData.rwandaId || formData.rwandaId.trim().length < 16) {
      setError('Rwanda National ID is required and must be at least 16 characters');
      return;
    }

    try {
      setLoading(true);
      
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        rwandaId: formData.rwandaId,
        phone: formData.phone,
        role: formData.role,
      };

      const response = await authService.register(registerData);
      
      if (response.success) {
        setSuccess(true);
        
        // Show success message
        toast.success('Account created successfully! Please log in.', { 
          position: 'top-center', 
          duration: 5000 
        });
        
        // Navigate to login page
        router.push('/login');
      } else {
        setError(response.message || 'Registration failed. Please try again.');
        toast.error(response.message || 'Registration failed. Please try again.', { 
          position: 'top-center', 
          duration: 4000 
        });
      }
    } catch (err: any) {
      console.error('Registration error:', err);
      const errorMessage = err.message || 'Failed to create account. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage, { 
        position: 'top-center', 
        duration: 4000 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth
  
  };

    return (
    <div className="min-h-screen bg-gradient-to-r from-[#0033FF] to-[#000333DD] relative overflow-hidden">
      <NavBar />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          {Array.from({ length: 8 }, (_, i) => {
            const isDiagonal = Math.random() > 0.5;
            const startFromLeft = Math.random() > 0.5;
            const startFromTop = Math.random() > 0.5;
            
            const x1 = startFromLeft ? Math.random() * 40 : 60 + Math.random() * 40;
            const y1 = startFromTop ? Math.random() * 50 : 30 + Math.random() * 70;
            const x2 = isDiagonal 
              ? (startFromLeft ? x1 + 20 + Math.random() * 30 : x1 - 20 - Math.random() * 30)
              : x1;
            const y2 = isDiagonal 
              ? (startFromTop ? y1 + 20 + Math.random() * 30 : y1 - 20 - Math.random() * 30)
              : (startFromTop ? y1 + 20 + Math.random() * 30 : y1 - 20 - Math.random() * 30);
            
            const length = Math.sqrt(
              Math.pow(x2 - x1, 2) + 
              Math.pow(y2 - y1, 2)
            );
            const duration = 10 + (length / 20);
            
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="8,4"
                className="animate-dash"
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.6 + Math.random() * 0.4,
                }}
              />
            );
          })}
        </svg>
      </div>
      
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-md">
          <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
            <div className="px-8 py-2 bg-gradient-to-r from-[#0033FF] to-[#000333DD]">
              <h1 className="text-2xl font-bold text-white text-center py-2">DYPSE</h1>
            </div>
            <CardHeader className="space-y-1 text-center pb-2">
              <CardDescription className="text-gray-600">
                For every youth, a path. For every path, a future
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 p-6">
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-start">
                  <FaExclamationCircle className="mt-0.5 mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {success ? (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md flex flex-col items-center text-center">
                  <FaCheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="text-lg font-medium">Account created successfully!</h3>
                  <p className="mt-1 text-sm">Please check your email to verify your account.</p>
                  <Button
                    onClick={() => router.push('/login')}
                    className="mt-4"
                  >
                    Go to Login
                  </Button>
                </div>
              ) : (
                <>
                  <GoogleSignInButton 
                    onClick={handleGoogleSignIn}
                    text="Sign up with Google"
                    className="w-full justify-center"
                  />
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="pl-10 w-full"
                            placeholder="First name"
                            disabled={loading}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="pl-10 w-full"
                            placeholder="Last name"
                            disabled={loading}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                            placeholder="Enter your email"
                            disabled={loading}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="rwandaId" className="block text-sm font-medium text-gray-700 mb-1">
                          Rwanda National ID <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaCreditCard className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="rwandaId"
                            name="rwandaId"
                            type="text"
                            required
                            value={formData.rwandaId}
                            onChange={handleChange}
                            className="pl-10 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                            placeholder="Enter your Rwanda National ID"
                            disabled={loading}
                            minLength={16}
                            maxLength={16}
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-500">16-digit Rwanda National ID number</p>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaPhone className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                            placeholder="Enter your phone number"
                            disabled={loading}
                          />
                        </div>
                      </div>

                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        I am a <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
                        disabled={loading}
                      >
                        <option value="youth">Job Seeker / Youth</option>
                        <option value="employer">Employer</option>
                      </select>
                    </div>

                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="pl-10 pr-10 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                          placeholder="Create a password (min 8 characters)"
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                          ) : (
                            <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                          )}
                        </button>
                      </div>
                      {formData.password && formData.password.length < 8 && (
                        <p className="mt-1 text-xs text-red-600">Password must be at least 8 characters</p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="pl-10 pr-10 w-full border-gray-300 focus:ring-2 focus:ring-[#0033FF] focus:border-[#0033FF] rounded-md shadow-sm"
                          placeholder="Confirm your password"
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                          ) : (
                            <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                          )}
                        </button>
                      </div>
                      {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                        <p className="mt-1 text-xs text-red-600">Passwords do not match</p>
                      )}
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className="h-4 w-4 text-[#0033FF] focus:ring-[#0033FF] border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                          I agree to the{' '}
                          <Link href="/terms" className="text-[#0033FF] hover:text-[#000333DD]">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-[#0033FF] hover:text-[#000333DD]">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0033FF] ${!agreedToTerms || loading ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#0033FF] to-[#000333DD] hover:from-blue-700 hover:to-blue-800'}`}
                      disabled={!agreedToTerms || loading}
                    >
                      {loading ? 'Creating account...' : 'Create account'}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-center py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                                 <Link href="/login" className="font-medium text-[#0033FF] hover:text-[#000333DD]">
                   Sign in
                 </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}
