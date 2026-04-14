import { useState, useEffect } from 'react';

// Функція для читання з localStorage
function getStoredValue(key, initialValue) {
  try {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
}

export function useLocalStorage(key, initialValue) {
  // 2. Використовуємо useState, але ініціалізуємо його
  // ліниво, викликавши функцію, що читає з localStorage.
  const [storedValue, setStoredValue] = useState(() => {
    return getStoredValue(key, initialValue);
  });

  // 3. Використовуємо useEffect для синхронізації
  // при зміні 'storedValue'
  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]); // Ефект запускається при зміні ключа або значення

  // 4. Повертаємо той самий інтерфейс, що й useState
  return [storedValue, setStoredValue];
}