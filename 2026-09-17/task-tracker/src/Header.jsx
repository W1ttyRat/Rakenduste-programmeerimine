import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h2>Task Tracker</h2>

            <nav>
                <NavLink to="/" end>Home</NavLink>{' '}
                <NavLink to="/tasks">Tasks</NavLink>
            </nav>
        </header>
    );
}