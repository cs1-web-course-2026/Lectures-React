import React from 'react';
import styles from '../cookie-recipies.module.css';

// Атомарний компонент: список інгредієнтів
function IngredientsList(props) {
  return (
    <div>
      <h3 className={styles.heading}>Інгредієнти:</h3>
      <ul className={styles.list}>
        {props.items.map((item) => (
          <li key={item} className={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;