import React from 'react';
import './pagination-pages.scss';

type PaginationPagesProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

const PaginationPages: React.FC<PaginationPagesProps> = React.memo(
  ({ currentPage, setCurrentPage }) => {
    const handleClick = React.useCallback(
      (pageNumber: number) => {
        setCurrentPage(pageNumber);
      },
      [setCurrentPage],
    );

    const pageNumbers = React.useMemo(() => {
      return Array.from({ length: 3 }, (_, index) => index + 1);
    }, []);

    return (
      <div className="pages-container">
        <ul className="pages-list">
          {pageNumbers.map(pageNumber => (
            <li
              key={pageNumber}
              className={
                currentPage === pageNumber ? 'active pages-list__item' : 'pages-list__item'
              }
              onClick={() => handleClick(pageNumber)}
            >
              <span className="page-number">{pageNumber}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

export default PaginationPages;
