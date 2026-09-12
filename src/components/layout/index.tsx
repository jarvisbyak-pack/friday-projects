import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30">
    {children}
  </div>
);

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="border-b border-neutral-800/50 backdrop-blur-md bg-neutral-950/50 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <h1 className="text-xl font-semibold tracking-tight text-neutral-100">{title}</h1>
    </div>
  </header>
);

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="max-w-7xl mx-auto p-6">{children}</main>
);
