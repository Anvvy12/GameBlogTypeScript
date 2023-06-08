interface PaginationCardProps {
  items: number[];
  itemsPerPage: number;
  currentPage: number;
}

const PaginationCard: React.FC<PaginationCardProps> = ({ items, itemsPerPage, currentPage }) => {
  return (
    <>
      {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
        <li
          className={`items-list__item ${itemsPerPage === 2 ? 'first-row' : 'second-row'}`}
          key={item}
        >
          <span className="item-text">Item {item}</span>
        </li>
      ))}
    </>
  );
};

export default PaginationCard;
