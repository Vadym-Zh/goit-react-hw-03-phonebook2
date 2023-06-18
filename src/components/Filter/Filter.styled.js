import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterLabel = styled.label`
  padding: 0 5px;
  pointer-events: none;
`;

export const FilterInput = styled.input`
  padding: 8px;

  :focus {
    outline: 1px solid #8ea7e9;
  }
`;
