import React from 'react';
import PersonGridLogic from '@/components/PersonGridLogic';
import Layout from '@/app/layout';

function Home() {
    return (
        <Layout>
            <h1>Person Grid</h1>
            <PersonGridLogic />
        </Layout>
    );
}

export default Home;
