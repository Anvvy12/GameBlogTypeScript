import { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PaginationPages from '../pagination-pages/PaginationPages';
import getPaginationState from '../pagination.actions';
import './pagination-container.scss';

type PaginationSectionProps = ConnectedProps<typeof connector>;

const PaginationSection: React.FC<PaginationSectionProps> = ({ getPagination }) => {
  useEffect(() => {
    getPagination();
  }, []);

  const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const itemsPerPage: number = 5;

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="pagination-section">
      <ul className="items-list">
        {items
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
            <li className={`items-list__item ${index < 2 ? 'first-row' : 'second-row'}`} key={item}>
              <span className="item-text">Item {item}</span>
            </li>
          ))}
      </ul>

      <PaginationPages currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

const mapState = () => ({});
const mapDispatch = {
  getPagination: getPaginationState,
};

const connector = connect(mapState, mapDispatch);

export default connector(PaginationSection);
