import React from 'react';
import { Layout, Header, Container, Card } from './components/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Header title="Batturaan Galaxy Viewer" />
      <Container>
        <Card>
          <h2 className="text-3xl font-bold text-white mb-4">Cosmic Navigation</h2>
          <p className="text-neutral-400 max-w-xl leading-relaxed text-lg">
            Welcome to the advanced galaxy visualization engine. Built for performance, 
            precision, and premium user experience. Explore the depth of space with
            real-time rendering and data-driven insights.
          </p>
        </Card>
      </Container>
    </Layout>
  );
};

export default App;
