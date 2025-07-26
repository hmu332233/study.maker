import { useSearchParams } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './ui/pagination';

type Props = {
  totalPage: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  totalPage,
  onPageChange,
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) ?? 1;

  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPage;
  const showPreviousEllipsis = page > 2;
  const showNextEllipsis = page < totalPage - 1;

  const handleLinkClick = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage) return;
    searchParams.set('page', newPage.toString());
    setSearchParams(searchParams, {
      preventScrollReset: true,
    });
  };

  return (
    <Pagination>
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handleLinkClick(page - 1)} />
          </PaginationItem>
        )}
        {showPreviousEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationLink onClick={() => handleLinkClick(page - 1)}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink onClick={() => handleLinkClick(page)} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {hasNextPage && (
          <PaginationItem>
            <PaginationLink onClick={() => handleLinkClick(page + 1)}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {showNextEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {hasNextPage && (
          <PaginationItem>
            <PaginationNext onClick={() => handleLinkClick(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}