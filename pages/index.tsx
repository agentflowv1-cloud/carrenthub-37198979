import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

const rentalPackages = [
  {
    id: 1,
    title: 'Economy',
    description: 'Perfect for city driving',
    price: '$40/day',
    features: ['Unlimited mileage', 'Insurance included']
  },
  {
    id: 2,
    title: 'Compact',
    description: 'Great for road trips',
    price: '$60/day',
    features: ['Unlimited mileage', 'Insurance included', 'GPS']
  },
  {
    id: 3,
    title: 'SUV',
    description: 'Ideal for families',
    price: '$80/day',
    features: ['Unlimited mileage', 'Insurance included', 'GPS', 'Child seats']
  }
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Car Rental Packages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Car Rental Packages</h1>
      <div className={styles.cardsContainer}>
        {rentalPackages.map((packageItem) => (
          <Card key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>
    </div>
  );
}
