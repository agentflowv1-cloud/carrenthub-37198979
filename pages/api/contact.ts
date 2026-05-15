// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { validate } from 'email-validator';

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  if (!validate(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Send email logic here
  console.log(name, email, message);

  return res.status(200).json({ message: 'Form submitted successfully' });
};

export default contact;