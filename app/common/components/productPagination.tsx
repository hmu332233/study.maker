type Props = {
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  total,
  currentPage,
  pageSize,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(total / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>hello</div>
  );
}