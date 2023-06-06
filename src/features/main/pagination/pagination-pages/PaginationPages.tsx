import React from 'react';
import './pagination-pages.scss';

type PaginationPagesTypes = {
  currentPage: number;
  setCurrentPage: (number: number) => void;
};

const PaginationPages: React.FC<PaginationPagesTypes> = ({ currentPage, setCurrentPage }) => {
  const pageNumbers: JSX.Element[] = [];

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= 3; i++) {
    pageNumbers.push(
      <li
        key={i}
        className={currentPage === i ? 'active pages-list__item' : 'pages-list__item'}
        onClick={() => handleClick(i)}
      >
        <span className="page-number">{i}</span>
      </li>,
    );
  }

  return (
    <div className="pages-container">
      <ul className="pages-list">{pageNumbers}</ul>
    </div>
  );
};

export default PaginationPages;
