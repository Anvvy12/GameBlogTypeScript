import PaginationSection from './pagination/pagination-container/PaginationSection';
import './main.scss';
interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  return (
    <main className="main">
      <PaginationSection />
    </main>
  );
};

export default Main;
