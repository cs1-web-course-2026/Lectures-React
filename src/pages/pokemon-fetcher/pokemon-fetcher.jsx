// PokemonFetcher.jsx
import React, { useState, useEffect } from 'react';
import './pokemon-fetcher.css';

export function PokemonFetcher() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Демонстрація useEffect з масивом залежностей [pokemonId]
  // Цей ефект буде запускатися щоразу, коли 'pokemonId' змінюється
  useEffect(() => {
    // Не забувайте про обробку стану завантаження
    setLoading(true);
    setPokemon(null); // Скидаємо старого покемона

    console.log(`Запускаю ефект для ID: ${pokemonId}`);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setPokemon(data);
      });
    
    // 2. (Для обговорення) Можна показати, що буде, 
    // якщо забути додати pokemonId у масив.
    // React буде скаржитися!
  }, [pokemonId]);
  
  // 3. (Для обговорення) Можна показати, що буде, 
  // якщо масив буде порожнім []. Ефект запуститься лише раз
  // для ID = 1 і не реагуватиме на кнопки.

  return (
    <div>
      <h3>Pokemon Fetcher</h3>
      <div className="controls">
        <input 
          type="number" 
          value={pokemonId} 
          onChange={(e) => setPokemonId(e.target.value)}
          min="1"
          className="id-input"
        />
        
        {/* Можна також додати кнопки для простої навігації,
          щоб показати, як оновлення стану 'pokemonId' 
          запускає 'useEffect'.
        */}
        <button onClick={() => setPokemonId(prevId => Math.max(1, prevId - 1))}>Попередній</button>
        <button onClick={() => setPokemonId(prevId => prevId + 1)}>Наступний</button>
      </div>

      {/* Результат */}
      {loading && <p>Завантаження...</p>}
      {pokemon && (
        <div>
          <h4>{pokemon.name}</h4>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}
