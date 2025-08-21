import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
