import ResponsiveAppBar from './app-bar/App-bar';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <ResponsiveAppBar />
    </header>
  );
};

export default Header;
