import React from 'react';
import styles from '../styles/Card.module.css';

interface PackageItem {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface CardProps {
  packageItem: PackageItem;
}

const Card: React.FC<CardProps> = ({ packageItem }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{packageItem.title}</h2>
      <p className={styles.description}>{packageItem.description}</p>
      <p className={styles.price}>{packageItem.price}</p>
      <div className={styles.featuresContainer}>
        <h3 className={styles.featuresTitle}>Features:</h3>
        <ul className={styles.featuresList}>
          {packageItem.features.map((feature) => (
            <li key={feature} className={styles.feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
