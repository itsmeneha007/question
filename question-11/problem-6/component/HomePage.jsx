import React from 'react';
import { useTheme } from './ThemeContext';
import { useUser } from './UserContext';

function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Welcome to the Home Page</h1>

      {/* Theme Section */}
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

      {/* User Section */}
      <div style={{ marginTop: '20px' }}>
        {user ? (
          <>
            <p>Welcome, {user.name}!</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <p>No user logged in</p>
            <button onClick={() => login({ name: 'John Doe' })}>Login as John Doe</button>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;