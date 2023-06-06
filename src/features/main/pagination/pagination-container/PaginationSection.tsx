import { useState } from 'react';
import PaginationPages from '../pagination-pages/PaginationPages';
import './pagination-container.scss';

const PaginationSection: React.FC = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="pagination-section">
      <ul className="items-list">
        {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
          <li className="items-list__item" key={item}>
            Item {item}
          </li>
        ))}
      </ul>

      <PaginationPages currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default PaginationSection;
