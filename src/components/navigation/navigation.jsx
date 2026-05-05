import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { ThemeToggle } from '../ui/theme-toggle';

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
