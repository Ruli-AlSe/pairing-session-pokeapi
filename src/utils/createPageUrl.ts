export const createPageUrl = (
  pageNumber: number | string,
  totalPages: number,
  searchParams: URLSearchParams,
  pathname: string
) => {
  const params = new URLSearchParams(searchParams);

  if (pageNumber === '...') {
    return `${pathname}?${params.toString()}`;
  }

  if (+pageNumber <= 0) {
    return `${pathname}`;
  }

  if (+pageNumber > totalPages) {
    return `${pathname}?${params.toString()}`;
  }

  params.set('page', pageNumber.toString());
  return `${pathname}?${params.toString()}`;
};
