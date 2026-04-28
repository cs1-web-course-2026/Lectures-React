import { Link } from 'react-router-dom';
import './home.css';

const demos = [
  {
    to: '/cookie-recepies',
    emoji: '🍪',
    title: 'Cookie Recipe',
    desc: 'Компонентна структура, props, списки',
  },
  {
    to: '/tamagochi',
    emoji: '🐣',
    title: 'Tamagochi',
    desc: 'useState, умовний рендеринг, події',
  },
  {
    to: '/mouse-tracker',
    emoji: '🖱️',
    title: 'Mouse Tracker',
    desc: 'useEffect, event listeners, cleanup',
  },
  {
    to: '/custom-hook',
    emoji: '🪝',
    title: 'Custom Hook',
    desc: 'useLocalStorage — власний хук',
  },
  {
    to: '/props-drilling',
    emoji: '🔩',
    title: 'Props Drilling',
    desc: 'Передача даних через рівні компонентів',
  },
  {
    to: '/theme-provider',
    emoji: '🎨',
    title: 'Theme Provider',
    desc: 'Context API, темна/світла тема',
  },
  {
    to: '/pokemon-fetcher',
    emoji: '⚡',
    title: 'Pokemon Fetcher',
    desc: 'fetch, useEffect, завантаження даних',
  },
];

export const HomePage = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="home-badge">CS1 · 2026</div>
        <h1 className="home-title">
          <span className="home-title-react">React</span> Lectures
        </h1>
        <p className="home-subtitle">
          Інтерактивні демо до курсу. Обери тему для вивчення.
        </p>
      </header>

      <div className="demo-grid">
        {demos.map(({ to, emoji, title, desc }) => (
          <Link key={to} to={to} className="demo-card">
            <span className="demo-emoji">{emoji}</span>
            <h2 className="demo-title">{title}</h2>
            <p className="demo-desc">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
