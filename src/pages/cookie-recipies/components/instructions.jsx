import React from 'react';
import styles from '../cookie-recipies.module.css';

// Атомарний компонент: інструкція
function Instructions({ steps }) {
  return (
    <div>
      <h3 className={styles.heading}>Інструкція:</h3>
      <p className={styles.instructions}>{steps}</p>
    </div>
  );
}

export default Instructions