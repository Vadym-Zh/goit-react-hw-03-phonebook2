import PropTypes from 'prop-types';

import {
  ListBtn,
  ContactsTable,
  ContactsTableHead,
  ContactsTableRow,
  ContactsTableCeil,
  ContactsFlexCeil,
} from './ContactList.styled';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <>
      <ContactsTable>
        <thead>
          <tr>
            <ContactsTableHead>Name</ContactsTableHead>
            <ContactsTableHead>Phone number</ContactsTableHead>
            <ContactsTableHead>Contacts ({contacts.length})</ContactsTableHead>
          </tr>
        </thead>

        <tbody>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactsTableRow key={id}>
                <ContactsFlexCeil>{name}</ContactsFlexCeil>
                <ContactsTableCeil>{number}</ContactsTableCeil>
                <ContactsTableCeil>
                  <ListBtn
                    type="button"
                    onClick={() => {
                      onRemove(id);
                    }}
                  >
                    Delet
                  </ListBtn>
                </ContactsTableCeil>
              </ContactsTableRow>
            );
          })}
        </tbody>
      </ContactsTable>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
