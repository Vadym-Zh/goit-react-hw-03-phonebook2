import styled from 'styled-components';

export const ListBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: solid black 1px;
  padding: 3px 15px;
  background-color: lightgray;
`;

export const ContactsTable = styled.table`
  min-width: 500px;
`;

export const ContactsTableHead = styled.th`
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid darkgrey;
  border-top: 1px solid darkgrey;
`;

export const ContactsTableRow = styled.tr`
  :hover {
    background-color: lightgrey;
  }
`;

export const ContactsTableCeil = styled.td`
  padding: 10px;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid darkgrey;
  }
`;

export const ContactsFlexCeil = styled.td`
  /* display: flex; */
  align-items: center;
  gap: 15px;
  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid darkgrey;
  }
`;
