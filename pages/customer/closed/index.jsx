import React from 'react';
import Layout from '../../../components/Layout';
import MyOrderLayout from '../../../components/MyOrderLayout';

const closed = () => {
  return (
    <div>
      <Layout>
        <MyOrderLayout>
          <div>Closed</div>
        </MyOrderLayout>
      </Layout>
    </div>
  );
};

export default closed;
