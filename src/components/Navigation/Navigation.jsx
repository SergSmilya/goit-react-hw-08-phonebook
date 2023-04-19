import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/login">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>

        <h1>Phonebook</h1>
      </header>
    </div>
  );
}
