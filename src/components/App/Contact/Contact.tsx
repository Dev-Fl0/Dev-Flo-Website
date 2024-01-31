import './Contact.scss';
import ContactLink from './ContactLink';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title text-primary-50">Contact</h2>
      <ContactLink />
    </div>
  );
}
