// App.js
import React, { useState } from 'react';

// 5. Глибокий компонент #1
// Цьому компоненту потрібен ТІЛЬКИ 'username'
function Avatar({ username }) {
  console.log("Avatar рендериться");
  return (
    <div style={{ background: 'blue', padding: '10px', color: 'white' }}>
      Avatar: {username}
    </div>
  );
}

// 5. Глибокий компонент #2
// Цьому компоненту потрібен ТІЛЬКИ 'theme'
function ThemeDisplay({ theme }) {
  console.log("ThemeDisplay рендериться");
  return (
    <div style={{ background: theme === 'dark' ? '#555' : '#EEE', color: theme === 'dark' ? '#EEE' : '#555', padding: '5px' }}>
      Тема: {theme}
    </div>
  );
}

// 4. Компонент-посередник (рівень 3)
// Змушений приймати і 'user', і 'theme', хоча використовує ТІЛЬКИ 'theme'
function Header({ user, theme }) {
  console.log("Header рендериться");
  return (
    <header style={{ border: '2px solid grey', padding: '10px' }}>
      Header
      {/* Передаємо 'user.name' далі */}
      <Avatar username={user.name} />
      {/* Використовуємо 'theme', але все одно прокидаємо 'user' */}
      <ThemeDisplay theme={theme} />
    </header>
  );
}

// 3. Глибокий компонент #3
// Цьому компоненту теж потрібен 'username'
function WelcomeMessage({ username }) {
  console.log("WelcomeMessage рендериться");
  return (
    <div style={{ margin: '10px 0' }}>
      <h4>Ласкаво просимо, {username}!</h4>
    </div>
  );
}

// 2. Компонент-посередник (рівень 2)
// Цей компонент взагалі нічого не використовує!
// Він просто служить "трубою" для пропсів 'user' та 'theme'.
function PageLayout({ user, theme }) {
  console.log("PageLayout рендериться");
  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      PageLayout (Цей компонент нічого не знає про user або theme)
      
      {/* ...але змушений передавати їх далі */}
      <Header user={user} theme={theme} />
      <WelcomeMessage username={user.name} />
    </div>
  );
}

// 1. Головний компонент, де живуть дані
export const PropDrillingDemo = () => {
  const [user] = useState({ name: 'Olena', id: 1 });
  const [theme, setTheme] = useState('light'); // Додамо ще один глобальний стан

  // Функція, щоб просто викликати ре-рендер App і показати проблему
  const forceRerender = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  console.log("App рендериться");

  return (
    <div>
      <h3>Демонстрація "Prop Drilling" (Ускладнена)</h3>
      <button onClick={forceRerender}>
        Змінити тему (викликати ре-рендер)
      </button>
      
      {/* Ми передаємо 'user' та 'theme' вниз через PageLayout,
        хоча самому PageLayout вони абсолютно не потрібні.
        Header'у потрібен 'theme', але він змушений приймати і 'user'.
        Це і є "забруднення" пропсами.
      */}
      <PageLayout user={user} theme={theme} />
    </div>
  );
}