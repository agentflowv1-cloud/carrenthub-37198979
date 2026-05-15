// pages/index.tsx
import type { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import ContactForm from '../components/ContactForm';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Home;