import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PaginationPages from '../pagination-pages/PaginationPages';
import getPaginationState from '../pagination.actions';
import PaginationCard from '../pagination-card/PaginationCard';
import './pagination-container.scss';

type PaginationSectionProps = ConnectedProps<typeof connector>;

const PaginationSection: React.FC<PaginationSectionProps> = ({ getPagination }) => {
  useEffect(() => {
    getPagination();
  }, []);

  const itemsBig: number[] = [1, 2, 3, 4, 5, 6];
  const itemsSmall: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="pagination-section">
      <div className="list-container">
        <ul className="items-list">
          <PaginationCard items={itemsBig} itemsPerPage={2} currentPage={currentPage} />
        </ul>
        <ul className="items-list">
          <PaginationCard items={itemsSmall} itemsPerPage={3} currentPage={currentPage} />
        </ul>
      </div>

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
