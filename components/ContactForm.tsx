// components/ContactForm.tsx
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    if (!name || !email || !message) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });
      if (response.status === 200) {
        setSuccess(true);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
      {error && <p>Error submitting form</p>}
      {success && <p>Form submitted successfully</p>}
    </form>
  );
};

export default ContactForm;