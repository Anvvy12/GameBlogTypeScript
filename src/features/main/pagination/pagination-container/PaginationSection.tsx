import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PaginationPages from '../pagination-pages/PaginationPages';
import getPaginationState from '../pagination.actions';
import './pagination-container.scss';

type PaginationSectionProps = ConnectedProps<typeof connector>;

const PaginationSection: React.FC<PaginationSectionProps> = ({ getPagination }) => {
  useEffect(() => {
    getPagination();
  }, []);

  const itemsBig: number[] = [1, 2, 3, 4, 5, 6];
  const itemsSmall: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const itemsPerPageBig: number = 2;
  const itemsPerPageSmall: number = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const renderItems = (items: number[], itemsPerPage: number) => {
    return items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
      <li
        className={`items-list__item ${itemsPerPage === 2 ? 'first-row' : 'second-row'}`}
        key={item}
      >
        <span className="item-text">Item {item}</span>
      </li>
    ));
  };

  return (
    <section className="pagination-section">
      <div className="list-container">
        <ul className="items-list">{renderItems(itemsBig, itemsPerPageBig)}</ul>
        <ul className="items-list">{renderItems(itemsSmall, itemsPerPageSmall)}</ul>
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
