import React from 'react';
import './custom-hook.css';
import { useLocalStorage } from '../../hooks/use-local-storage'; // хук тепер спільний для всього проєкту

export const LocalStorageDemo = () => {
  const [name, setName] = useLocalStorage('username', 'Гість');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="localStorageDemoContainer" data-theme={theme}>
      <h3 className="localStorageTitle">Демо власного хука: <code>useLocalStorage</code></h3>
      <p className="localStorageHint">
        Змініть значення у полях, а потім <b>ОНОВІТЬ СТОРІНКУ (F5)</b>. Дані залишаться!
      </p>

      <div className="localStorageFieldRow">
        <label className="localStorageLabel">Ім'я:</label>
        <input
          className="localStorageInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button className="localStorageToggleButton" onClick={toggleTheme}>
        Змінити тему (зараз: {theme})
      </button>

      <hr className="localStorageDivider" />
      <p className="localStorageGreeting">Вітаємо, {name}!</p>
    </div>
  );
}

export default LocalStorageDemo;