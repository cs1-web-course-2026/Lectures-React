import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/cookie-recepies">Cookie Recipe</Link> |
            <Link to="/tamagochi">Tamagochi</Link> |
            <Link to="/mouse-tracker">Mouse Tracker</Link> |
            <Link to="/custom-hook">Custom Hook</Link> |
            <Link to="/props-drilling">Props Drilling</Link> |
            <Link to="/theme-provider">Theme Provider Demo</Link>
        </nav>
    )
};
