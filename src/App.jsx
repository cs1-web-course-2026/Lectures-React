import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { CookieRecipiesPage } from './pages/cookie-recipies';
import { TamagochiPage } from './pages/tamagochi';
import { MouseTrackerPage } from './pages/mouse-tracker';
import { LocalStorageDemo } from './pages/custom-hook';
import { PropDrillingDemo } from './pages/props-drilling';
import { ThemeProviderDemo } from './pages/theme-provider';
import { PokemonFetcher } from './pages/pokemon-fetcher';
import { Navigation } from './components/navigation';
import { ThemeTogglePanel } from './components/theme-toggle-panel';
import './App.css'

function App() {
  return (
    <>
      <ThemeTogglePanel />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cookie-recepies" element={<CookieRecipiesPage />} />
        <Route path="/tamagochi" element={<TamagochiPage />} />
        <Route path="/mouse-tracker" element={<MouseTrackerPage />} />
        <Route path="/custom-hook" element={<LocalStorageDemo />} />
        <Route path="/props-drilling" element={<PropDrillingDemo />} />
        <Route path="/theme-provider" element={<ThemeProviderDemo />} />
        <Route path="/pokemon-fetcher" element={<PokemonFetcher />} />
      </Routes>
    </>
  )
}

export default App
