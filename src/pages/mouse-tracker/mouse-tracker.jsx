// MouseTracker.jsx
import React, { useState, useEffect } from 'react';
import './mouse-tracker.css';
import { Card } from '../../components/ui/card/card';

// Компонент, який будемо монтувати/демонтувати
export const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Ефект: Додаю слухача mousemove');

    const handleMouseMove = (e) => {
      console.log('event: ', e);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Додаємо слухача
    window.addEventListener('mousemove', handleMouseMove);

    // Функція очищення!
    // React викличе її, коли компонент буде демонтовано
    return () => {
      console.warn('ОЧИЩЕННЯ: Прибираю слухача mousemove');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Порожній масив = ефект запускається 1 раз при монтажі

  return (
    <div
      className="cursorDot"
      style={{ top: position.y, left: position.x }}
    />
  );
}

export const MouseTrackerPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mouseTrackerPage">
      <h3 className="mouseTrackerTitle">Демонстрація функції очищення</h3>
      <button className="toggleButton" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Сховати трекер' : 'Показати трекер'}
      </button>
      {/* Монтуємо/демонтуємо компонент 'Tracker' */}
      {isVisible && <MouseTracker />}
    </div>
  );
}
