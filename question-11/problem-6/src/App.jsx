import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import HomePage from './HomePage';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <HomePage />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;