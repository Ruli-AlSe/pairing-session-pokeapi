// import { usePathname, useSearchParams } from 'next/navigation';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { createPageUrl, generatePaginationNumbers } from '../utils';
import { useLocation, useSearchParams, Link } from 'react-router-dom';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  let currentPage = isNaN(+pageString) ? 1 : +pageString;
  if (currentPage <= 1) currentPage = 1;

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  return (
    <div className="flex text-center justify-center my-10">
      <nav>
        <ul className="flex list-style-none">
          <li className="w-5 h-5 sm:w-8 sm:h-8 mr-3">
            <Link
              to={createPageUrl(currentPage - 1, totalPages, searchParams, pathname)}
              aria-disabled={currentPage <= 1}
              className={clsx(
                'relative block py-0.5 px-1 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                {
                  'pointer-events-none': currentPage <= 1,
                }
              )}
            >
              <IoChevronBackOutline size={25} />
            </Link>
          </li>

          {allPages.map((page, idx) => (
            <li key={`${page} - ${idx}`} className="w-5 h-5 sm:w-8 sm:h-8">
              <Link
                to={createPageUrl(page, totalPages, searchParams, pathname)}
                className={clsx(
                  'text-xs sm:text-base relative block py-0.5 px-1 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                  {
                    'bg-blue-600 shadow-sm text-white hover:bg-blue-700 hover:text-white':
                      page === currentPage,
                  }
                )}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="w-5 h-5 sm:w-8 sm:h-8 ml-3">
            <Link
              to={createPageUrl(currentPage + 1, totalPages, searchParams, pathname)}
              className={clsx(
                'relative block py-0.5 px-1 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                {
                  'pointer-events-none': currentPage >= totalPages,
                }
              )}
            >
              <IoChevronForwardOutline size={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
