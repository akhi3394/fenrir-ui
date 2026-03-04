import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import FindingDetails from './pages/FindingDetails';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { }
});

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-[#0b0d0e] transition-colors duration-200">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/finding-details" element={<FindingDetails />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
