import { useTheme } from '../../../context/theme-context';
import styles from './theme-toggle.module.css';

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
