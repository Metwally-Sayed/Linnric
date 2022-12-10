import React from 'react';
import EmptyOredersList from '../../../components/EmptyOredersList';
import Layout from '../../../components/Layout';
import MyOrderLayout from '../../../components/MyOrderLayout';

const active = () => {
  const activeOrder = [];
  return (
    <Layout>
      <MyOrderLayout>
        {activeOrder.length === 0 ? (
          <EmptyOredersList />
        ) : (
          activeOrder.map((order) => {
            console.log(order);
          })
        )}
      </MyOrderLayout>
    </Layout>
  );
};

export default active;
