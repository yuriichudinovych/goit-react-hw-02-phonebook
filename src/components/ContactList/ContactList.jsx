import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContacts }) => (
  <>
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>{`${name}: ${number}`}</p>
            <button onClick={() => removeContacts(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
