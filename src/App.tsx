import React from 'react';
import { Layout, Header, Container } from './components/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Header title="Batturaan Galaxy Viewer" />
      <Container>
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-light text-neutral-200 mb-4">Welcome</h2>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            Welcome to the advanced galaxy visualization engine. Built for performance, 
            precision, and premium user experience.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default App;
