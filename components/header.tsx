import { useAuth } from "@/app/context/AuthContext";
import { useTheme } from '@/app/context/ThemeToggle';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`py-4 shadow ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">medium</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`font-bold py-2 px-4 rounded ${theme === 'light' ? 'text-black' : 'text-white'}`}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          {isAuthenticated && (
            <button
              onClick={logout}
              className={`font-bold py-2 px-2 rounded ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
