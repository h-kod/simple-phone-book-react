import React from 'react';
import List from "./List";
import Form from "./Form";
import PropTypes from 'prop-types';
import './contact.css';

const Contact = props =>
    <div className="ContactComp">
        <Form addContact={props.addContact}/>
        <List contacts={props.contacts}/>
    </div>;

Contact.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
};

export default Contact;
