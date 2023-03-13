import { Icon, Pagination } from 'semantic-ui-react';
import { StyledPaginationWrapper } from './Pagination.style';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function PaginationComponent({ moviesPreview, activePage, onChangePage }) {
  const { isMobile } = useMediaQuery();

  return (
    <StyledPaginationWrapper>
      <Pagination
        defaultActivePage={activePage}
        ellipsisItem={isMobile ? null : { content: <Icon name="ellipsis horizontal" />, icon: true }}
        firstItem={isMobile ? null : { content: <Icon name="angle double left" />, icon: true }}
        lastItem={isMobile ? null : { content: <Icon name="angle double right" />, icon: true }}
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
