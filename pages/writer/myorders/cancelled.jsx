import React from 'react';
import WriterLayoutWrapper from '../../../components/WriterLayoutWrapper';
import WriterMyOrderLayout from '../../../components/WriterMyOrderLayout';
import WriterMyOrderTable from '../../../components/WriterMyOrderTable';

const cancelled = () => {
  return (
    <>
      <WriterLayoutWrapper>
        <WriterMyOrderLayout>
          <WriterMyOrderTable />
        </WriterMyOrderLayout>
      </WriterLayoutWrapper>
    </>
  );
};

export default cancelled;
