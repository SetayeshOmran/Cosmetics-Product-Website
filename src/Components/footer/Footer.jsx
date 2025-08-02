import React from 'react';
import Logo from '../header/Logo';
import ContactUs from './ContactUs';
import Company from './Company';
import Account from './Account';
import Resources from './Resources';
const Footer = () => {
    return (
        <div className='border-t border-t-1 mt-30 pt-10 mb-10   px-10  '>
          <Logo/>
          <div className='footerSection mt-10'>
          <ContactUs/>
          <Account/>
          <Company/>
         
         <Resources/>
          </div>
          
        </div>
    );
}

export default Footer;
