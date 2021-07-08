import React from 'react';
import { Pagination as PaginationMUI } from '@material-ui/lab';

interface Props {
  total: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
const Pagination = ({ total, onChange }: Props) => {
  return (
    <>
      <PaginationMUI count={total} onChange={onChange} />
    </>
  );
};

export default Pagination;
