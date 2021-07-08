import React, { useState } from 'react';
import { Paper as PaperMUI, InputBase as InputBaseMUI, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import styled from 'styled-components';
interface Props {
  onChange?: (value: string) => void;
  onSearch: (keyword: string) => void;
}

const Paper = styled(PaperMUI)`
  padding-left: 12px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const InputBase = styled(InputBaseMUI)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

function Search({ onSearch }: Props) {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <Paper>
      <InputBase
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="Search"
        name="keyword"
        onKeyDown={(event) => event.key === 'Enter' && onSearch(keyword)}
      />
      <IconButton aria-label="search" onClick={() => onSearch(keyword)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
