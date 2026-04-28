import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { useTheme } from '../../context/theme-context';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={styles.themeToggleWrapper}>
            <span className={styles.themeIcon}>{isDark ? '🌙' : '☀️'}</span>
            <button
                className={`${styles.toggleTrack} ${isDark ? styles.toggleDark : styles.toggleLight}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                role="switch"
                aria-checked={!isDark}
            >
                <span className={styles.toggleThumb} />
            </button>
            <span className={styles.themeIcon}>{isDark ? '☀️' : '🌙'}</span>
        </div>
    );
};

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
            <NavLink to="/cookie-recepies" className={({ isActive }) => isActive ? styles.active : ''}>Cookie Recipe</NavLink>
            <NavLink to="/tamagochi" className={({ isActive }) => isActive ? styles.active : ''}>Tamagochi</NavLink>
            <NavLink to="/mouse-tracker" className={({ isActive }) => isActive ? styles.active : ''}>Mouse Tracker</NavLink>
            <NavLink to="/custom-hook" className={({ isActive }) => isActive ? styles.active : ''}>Custom Hook</NavLink>
            <NavLink to="/props-drilling" className={({ isActive }) => isActive ? styles.active : ''}>Props Drilling</NavLink>
            <NavLink to="/theme-provider" className={({ isActive }) => isActive ? styles.active : ''}>Theme Provider</NavLink>
            <NavLink to="/pokemon-fetcher" className={({ isActive }) => isActive ? styles.active : ''}>Pokemon Fetcher</NavLink>
        </nav>
    );
};
