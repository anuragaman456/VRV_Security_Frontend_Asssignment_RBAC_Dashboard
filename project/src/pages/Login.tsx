import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { UserRole } from '../types/user';
import { LogIn } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login with admin user
    login({
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: UserRole.ADMIN,
      createdAt: new Date(),
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-gradient-to-br from-violet-600/30 via-indigo-600/30 to-purple-600/30 blur-3xl" />
        </div>
      </div>

      {/* Login content */}
      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-3 ring-2 ring-white/20">
            <LogIn className="h-12 w-12 text-white animate-pulse" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/10 backdrop-blur-md py-8 px-4 shadow-2xl shadow-black/10 sm:rounded-lg sm:px-10 ring-1 ring-white/20 transform transition-all duration-500 hover:scale-[1.01]">
          <form className="space-y-6" onSubmit
