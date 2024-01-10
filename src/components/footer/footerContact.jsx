import exp from 'constants';
import React from 'react';


import ContactInfo from './../contact/contactInfo/contactInfo';
import ContactSocial from './../contact/contactInfo/contactSocial';
import VisiterCount from './../visiterCounterFolder/visiterCounter';

const FooterContact = () => {

    return (
        <>
            <VisiterCount />
            <ContactInfo />
            <ContactSocial />
        </>
    )
}

export default FooterContact;