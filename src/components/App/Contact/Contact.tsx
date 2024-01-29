import React from 'react';
import ContactLink from './ContactLink';

export default function Contact() {
  return (
    <div className="w-full course">
      <h2
        id="contact"
        className="text-primary-50 mb-8 sm:mb-20 text-4xl text-center font-extrabold"
      >
        Contact
      </h2>
      <ContactLink />
    </div>
  );
}
