import React from 'react';
import TransferForm from './components/TransferForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl text-indigo-700 mb-2">Wise Transfer Clone</h1>
        <p className="text-indigo-600 font-mono">Send money easily between India, Australia, and the UK</p>
      </header>
      <main className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <TransferForm />
      </main>
      <footer className="mt-12 text-center text-gray-500 text-xs">
        &copy; 2024 Wise Transfer Clone. All rights reserved.
      </footer>
    </div>
  );
}
