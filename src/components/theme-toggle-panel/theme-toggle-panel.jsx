import { ThemeToggle } from '../ui/theme-toggle';
import styles from './theme-toggle-panel.module.css';

export const ThemeTogglePanel = () => {
    return (
        <div className={styles.panel}>
            <ThemeToggle />
        </div>
    );
};
