import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-orange-500 border-l-4 border-orange-500 pl-4">{title}</h2>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500 selection:text-white">
      {/* Hero */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          Precision <span className="text-orange-500">Fabrication</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light">
          Professional industrial welding and structural solutions built to last.
        </p>
      </header>

      {/* Services Section */}
      <Section title="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Roof Works', 'Custom Fabrication', 'Structural Welding'].map((item) => (
            <div key={item} className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/50 transition-all cursor-default">
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-zinc-500">High-end craftsmanship meeting rigorous industrial standards.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-zinc-800 text-zinc-600">
        <p>&copy; 2024 Industrial Fabrication Co. Precision in every spark.</p>
      </footer>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-4 right-4 md:left-1/3 md:right-1/3 p-4 bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-zinc-700 flex justify-between items-center shadow-2xl z-50">
        <span className="font-bold text-sm hidden md:block">Need a quote?</span>
        <button className="w-full md:w-auto bg-orange-500 text-zinc-950 px-8 py-4 rounded-xl font-bold hover:bg-orange-400 transition-colors active:scale-95 text-lg">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
