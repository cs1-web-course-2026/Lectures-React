import React from 'react';
import styles from './cookie-recipies.module.css';
import IngredientsList from './components/ingredients-list';
import Instructions from './components/instructions';

const cookieRecipe = {
  title: 'Класичне шоколадне печиво',
  ingredients: ['200г борошна', '150г цукру', '100г темного шоколаду', '2 яйця', '100г масла'],
  instructions:
    'Змішайте сухі інгредієнти. Додайте яйця та розтоплене масло, замісіть тісто. ' +
    'Сформуйте печиво, додавши шматочки шоколаду. Випікайте 15 хвилин при 180°C.',
};

// Складений компонент: об'єднує атомарні
export function CookieRecipiesPage() {
  return (
    <div className={styles.recipeCard}>
      <h2 className={styles.title}>{cookieRecipe.title}</h2>
      <IngredientsList items={cookieRecipe.ingredients} />
      <Instructions steps={cookieRecipe.instructions} />
    </div>
  );
}
