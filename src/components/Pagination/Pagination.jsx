import { Icon, Pagination } from 'semantic-ui-react';
import { StyledPaginationWrapper } from './Pagination.style';

function PaginationComponent({ moviesPreview, activePage, onChangePage }) {
  return (
    <StyledPaginationWrapper>
      <Pagination
        defaultActivePage={activePage}
        ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
        firstItem={{ content: <Icon name="angle double left" />, icon: true }}
        lastItem={{ content: <Icon name="angle double right" />, icon: true }}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
        totalPages={
          moviesPreview.total_pages && moviesPreview.total_pages < 500
            ? moviesPreview.total_pages
            : 500
        }
        onPageChange={onChangePage}
        inverted
      />
    </StyledPaginationWrapper>
  );
}

export default PaginationComponent;
