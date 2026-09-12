import React from 'react';

// Reusable Premium Card
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 backdrop-blur-xl shadow-2xl transition-all hover:border-neutral-700 ${className}`}>
    {children}
  </div>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-indigo-500/30 font-sans antialiased">
    {children}
  </div>
);

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="border-b border-neutral-800/50 backdrop-blur-md bg-neutral-950/80 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>
      <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
    </div>
  </header>
);

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="max-w-7xl mx-auto px-6 py-12">{children}</main>
);
