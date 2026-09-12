import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-accent">{title}</h2>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold mb-6"
        >
          Precision <span className="text-accent">Fabrication</span>
        </motion.h1>
        <p className="text-xl text-slate-400 max-w-2xl">Quality welding and structural fabrication for your next project.</p>
      </header>

      {/* Placeholder Sections */}
      <Section title="Roof Works">
        <p>Expert structural roof fabrication and installation services.</p>
      </Section>

      <Section title="Why Choose Us">
        <div className="grid md:grid-cols-3 gap-8">
          {['Certified Welders', 'High-Grade Materials', 'Timely Delivery'].map(item => (
            <div key={item} className="p-6 bg-slate-900 border border-slate-800 rounded-lg">{item}</div>
          ))}
        </div>
      </Section>

      {/* Footer/Contact */}
      <footer className="py-12 text-center border-t border-slate-800">
        <p>© 2026 Fabrication Co. All rights reserved.</p>
      </footer>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700 flex justify-between items-center shadow-2xl">
        <span className="font-bold">Ready to start?</span>
        <button className="bg-accent text-slate-950 px-6 py-2 rounded-full font-bold">Contact Us</button>
      </div>
    </div>
  );
}
