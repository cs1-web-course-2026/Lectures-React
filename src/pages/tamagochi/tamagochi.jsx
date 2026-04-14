import React, { useState } from 'react';
import styles from './tamagotchi.module.css';

function MoodPanel({ mood }) {
  return <span className={styles.mood}>{mood}</span>;
}

function HungerBar({ hunger }) {
  // Ширина і колір бару залежать від стану — залишаємо inline
  const barStyle = {
    width: `${hunger * 10}%`,
    backgroundColor: hunger > 7 ? '#e74c3c' : '#f1c40f',
  };

  return (
    <>
      <p className={styles.label}>Голод:</p>
      <div className={styles.barTrack}>
        <div className={styles.barFill} style={barStyle} />
      </div>
    </> 
  );
}

export function TamagochiPage() {
  const [mood, setMood]     = useState('😊');
  const [hunger, setHunger] = useState(5); // 0 = ситий, 10 = дуже голодний

  console.log('mood -', mood);
  console.log('hunger -', hunger);

  const handleFeed = () => {
    setHunger((prev) => Math.max(0, prev - 3));
    setMood('😊');
  };

  const handlePlay = () => {
    const next = Math.min(10, hunger + 2);
    setHunger(next);
    setMood(next > 8 ? '😢' : '🥳');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Тамагочі</h2>

      <MoodPanel mood={mood} />

      <HungerBar hunger={hunger} />

      <button className={`${styles.btn} ${styles.btnFeed}`} onClick={handleFeed}>
        Годувати 🍔
      </button>
      <button className={`${styles.btn} ${styles.btnPlay}`} onClick={handlePlay}>
        Гратись ⚽
      </button>
    </div>
  );
}
