import React, { useState, useContext, createContext } from 'react';
import './theme-provider.css';
import { Card } from '../../components/ui/card/card';

// 1. СТВОРЕННЯ КОНТЕКСТУ
// Створюємо його з початковим значенням (необов'язково)
const ThemeContext = createContext(null);

// 5. ГЛИБОКО ВКЛАДЕНИЙ КОМПОНЕНТ
// Йому не потрібно отримувати пропси, він просто бере дані з "порталу"
function ThemedButton() {
  // 6. ВИКОРИСТАННЯ КОНТЕКСТУ
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="themedButton" onClick={toggleTheme}>
      Перемкнути на {theme === 'dark' ? 'Світлу' : 'Темну'}
    </button>
  );
}

// 4. КОМПОНЕНТ-ПОСЕРЕДНИК
// Зверніть увагу: він більше не приймає жодних пропсів!
function Toolbar() {
  return (
    <div className="toolbar">
      <ThemedButton />
    </div>
  );
}

// 2. ГОЛОВНИЙ КОМПОНЕНТ
export const ThemeProviderDemo = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  };

  // 3. НАДАННЯ КОНТЕКСТУ
  // Обгортаємо частину дерева, яка матиме доступ до 'value'
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="themeProviderRoot" data-theme={theme}>
        <h3>Демонстрація Context API</h3>
        <p>Поточна тема: {theme}</p>
        <Toolbar /> {/* Toolbar не отримує пропсів */}
        <hr className="divider" />
        <Card title="Картка прикладу" badge={theme === 'dark' ? 'Dark' : 'Light'}>
          <p className="muted">Цей текст використовує приглушений колір теми.</p>
          <p>
            Перейдіть за посиланням: <a className="link" href="#">Документація</a>
          </p>
          <div style={{ marginTop: '12px' }}>
            <input className="input" placeholder="Введіть текст..." />
          </div>
        </Card>
      </div>
    </ThemeContext.Provider>
  );
};


