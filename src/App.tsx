import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <header className="border-b border-neutral-800 pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Batturaan Galaxy Viewer</h1>
      </header>
      <main>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <p className="text-neutral-400">Welcome to the advanced galaxy visualization engine.</p>
        </div>
      </main>
    </div>
  );
};

export default App;
