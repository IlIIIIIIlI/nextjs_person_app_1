import React from 'react';
import PersonGridLogic from '@/components/PersonGridLogic';
import Layout from '@/app/layout';

function Home() {
  return (
    <div>
          <Layout>
              <h1>Person Grid</h1>
              <PersonGridLogic />
          </Layout>
    </div>
  );
}

export default Home;
